import React from 'react'
import Templates from '../components/Templates'
import loginImg from '../assets/login.png'
function Login({setLogged}) {
  return (
    <Templates
      title="Welcome Back"
      desc1="Build skills for today,tommorow,and beyond."
      desc2="Education to future-proof your carrer."
      image={loginImg}
      formType="login"
      setLogged={setLogged}
    />
  )
}

export default Login