import React from 'react'
import './Getstarted.css'
import {Link} from 'react-router-dom'

const GetStarted = () => {
  return (
    <div>


      <div className='getstarted'>
        
        <h3>Welcome</h3>


        <div className='getlinks'>
        <Link className='but'>Individual</Link>
        <Link className='but'>Business</Link>
        </div>
       



      <div className='inputs'>

       <input type="text" name="username" id="" placeholder='username' />
       
       <input type="text" name="businessName" id="" placeholder='Business Name' />

       <input type="email" name="Email" id="" placeholder='Email' />

       <input type="tel" name="telephone" id="" placeholder='Phone Number' />

       <input type="text" name="Referal" id="" placeholder='Referal code (Optional)' />

       <p>By clicking the Sign Up button below, you agree to TradExpress <a href=""> terms and service </a></p>

       <button className='sign'>Sign Up</button>

       <p>Already have an account? <a href="">Click here</a></p>

      </div>
      </div>



    </div>
  )
}

export default GetStarted