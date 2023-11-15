import React from 'react'
import Templates from '../components/Templates'
import signupImg from '../assets/signup.png'
function Signup({setLogged}) {
  return (
    <Templates
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today,tommorow,and beyond."
      desc2="Education to future-proof your carrer."
      image={signupImg}
      formtype="signup"
      setLogged={setLogged}
    />
  )
}

export default Signup