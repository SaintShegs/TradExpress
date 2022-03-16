import React from 'react'
import './Getstarted.css'
import {Link} from 'react-router-dom'

const Business = () => {
  return (




    <div>


      <div className='getstarted'>
        
        <h3>Welcome</h3>


        <div className='getlinks'>
        <Link to='./Individual' className='but'>Individual</Link>
        <Link to='./Business' className='but'>Business</Link>
        </div>
       



      <div className='inputs'>

       <input className='datas' type="text" name="username" id="" placeholder='Username' />
       
       <input className='datas' type="text" name="businessName" id="" placeholder='Business Name' />

       <input className='datas' type="email" name="Email" id="" placeholder='E-mail' />

       <input className='datas' type="tel" name="telephone" id="" placeholder='Phone Number' />

       <input className='datas' type="text" name="Referal" id="" placeholder='Referal Code (Optional)' />

       <p>By clicking the Sign Up button below, you agree to TradExpress <a className='getanchor' href=""> terms and service </a></p>

       <button className='sign'>Sign Up</button>

       <p>Already have an account? <Link  to='./Login' className='getanchor'>Click here</Link></p>

      </div>
      </div>



    </div>
  )
}

export default Business