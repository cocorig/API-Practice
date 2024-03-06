import express from "express";
import dotenv from "dotenv";
import { user_route } from "./routes/user.route";
import { db } from "./data/database";
dotenv.config(); //환경 변수를 로드 라이브러리
const app = express();
app.use(express.json()); //JSON 형식의 요청 본문을 파싱하기 위한 미들웨어
app.use(express.urlencoded({ extended: true })); //URL-encoded 형식의 요청 본문을 파싱하기 위한 미들웨어,OST 요청의 body를 쉽게 파싱할 수 있다.
//bodyParser,app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
  });
});

app.use("/api/users", user_route);
