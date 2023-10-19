import { useState } from "react";
import JoinPage from "./components/JoinPage";
import LoginPage from "./components/LoginPage";
import axios from "axios"; // Import Axios

function App() {
  const [page, setPage] = useState(true);
  const [info, setInfo] = useState("");

  const handlePage = () => {
    setPage((prevPage) => {
      return !prevPage;
    });
  };

  // axios로 변환
  const getMyinfo = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const response = await axios.get(
        "https://api.mandarin.weniv.co.kr/user/myinfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = response.data;
      console.log(json);
      setInfo(JSON.stringify(json));
    } catch (error) {
      console.error("에러 발생", error);
    }
  };

  return (
    <div>
      <button type="button" onClick={getMyinfo}>
        내 정보 불러오기
      </button>
      {info}
      <JoinPage handlePage={handlePage} />
      {page ? (
        <LoginPage handlePage={handlePage} />
      ) : (
        <JoinPage handlePage={handlePage} />
      )}
    </div>
  );
}

export default App;
