import { useState } from "react"

function LoginPage() {
  const [email , setEmail]  = useState('')
  const [password , setPassword]  = useState('')
  const inputEmail = (e) =>{
    setEmail(e.target.value)

  }
  const inputPassword = (e) =>{
    setPassword(e.target.value)
  }
  const onSubmit = (e) =>{
    e.preventDefault(); // 버튼을 누르면 새로고침이 일어나기 때문에 방지
    setEmail('')
    setPassword('')
    console.log(email , password);
  }
  return(
      <>
          <h1>로그인</h1>
          <section>
              <h2>이메일, 비밀번호 입력하는곳</h2>
              <form onSubmit={onSubmit}>
                  <input type="text" placeholder="이메일입력" onChange={inputEmail}  value={email}/>
                  <input type="text" placeholder="비밀번호입력" onChange={inputPassword}  value={password}/>
                  <button>로그인</button>
              </form>
          </section>
      </>
  )
}

export default LoginPage