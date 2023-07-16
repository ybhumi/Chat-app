import React from 'react';



const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>Ghost Chat</span>
        <span className="title">Login</span>
        <form>
         
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
           
            <button>Sign In</button>
            <p>Don't have an Account? Register</p>
        </form>
      </div>
    </div>
  )
}

export default Login
