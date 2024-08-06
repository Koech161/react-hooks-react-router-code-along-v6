import React from 'react'
import NavBar from '../NavBar'

const Login = () => {
  return (
    <div>
      <header>
    <NavBar />
      </header>
      <main>
        <h1>Login</h1>
        <form>
            <div>
                <label for="username">Username</label>
                <input id='userName' type='text' name='username' placeholder='Username'/>
            </div>
            <br/>
            <div>
                <label for='password'>Password</label>
                <input type='password' name='password' placeholder='password' />
            </div>
            <br/>
            <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  )
}

export default Login
