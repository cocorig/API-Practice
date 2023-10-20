const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get("/productList", async (req, res) => {
  // 알라딘에서 발급받은 TTB 키
  // const QueryType = "Bestseller"; // 상품 리스트 유형 (원하는 유형으로 변경)
  // const MaxResults = 10; // 한 페이지당 결과 수 (원하는 수로 변경)
  // const Cover = "Big";
  const apiUrl = `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Cover=Big&Version=20131101`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "알 수 없는 오류가 발생했습니다." });
  }
});

app.listen(3000, () => {
  console.log("Listening to port 3000...");
});
