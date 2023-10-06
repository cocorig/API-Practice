import React from 'react'

function LoginPage() {
  return (
    <div>
      <h1>로그인</h1>
      <section>
        <h2>이메일, 비밀번호</h2>
        <form>
          <input type="text" placeholder='email' />
          <input type="text" placeholder='password' />
          <button>로그인</button>
        </form>
      </section>
    </div>
  )
}

export default LoginPage
