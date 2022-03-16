import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
    
    <div className="getstarted">


        <h3>Welcome Back</h3>


        <div className='inputs logg'>
            <input className='datas' type="text" name="username" id="" placeholder='    Username' />
            <input className='datas' type="password" name="password" id="" placeholder='    Password' />
        </div>


        <div className='forgot'>


            <section className='rem'>
            <input type="checkbox"  />
            <span>   Remember password</span>

            </section>



            <Link className='anchor'>Forgot Password?</Link>

        </div>


        <button className='continue sign'>Log In</button>



        <p className='new'>New user? <Link to='./Getstarted'>Click here</Link></p>

    </div>



    </div>
  )
}

export default Login