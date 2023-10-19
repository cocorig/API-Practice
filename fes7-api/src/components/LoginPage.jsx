import { useState } from "react";
import axios from "axios"; // Import Axios

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr";
    const reqPath = "/user/login";
    const reqUrl = baseUrl + reqPath;

    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };

    try {
      const response = await axios.post(reqUrl, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const token = response.data.user.token;
      console.log(token);

      localStorage.setItem("token", token);
    } catch (error) {
      alert("로그인에 실패했습니다!");
    }
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <h1>로그인</h1>
      <section>
        <h2>이메일, 비밀번호 입력하는 곳</h2>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            placeholder="이메일 입력"
            onChange={inputEmail}
            value={email}
          />
          <input
            type="password"
            placeholder="비밀번호 입력"
            onChange={inputPassword}
            value={password}
          />
          <button type="submit">로그인</button>
        </form>
      </section>
    </>
  );
}

export default LoginPage;
