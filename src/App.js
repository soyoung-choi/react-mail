import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function App() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('이메일이 정상적으로 발송되었습니다.')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <h1>React Email</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>이름</label>
        <input type="text" name="name" />

        <label>상호명</label>
        <input type="text" name="company" />

        <label>이메일</label>
        <input type="email" name="email" />

        <label>내용</label>
        <textarea name="text" />
        <button>이메일 전송</button>
      </form>
    </>
  )
}

export default App
