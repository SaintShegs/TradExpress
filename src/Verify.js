import React from 'react'
import { Link } from 'react-router-dom'
import mail from './images/mailing.svg'

const Verify = () => {
  

  return (
    <div>

        <div className='getstarted'>

            <h3 className='paragraph'>You're Almost In!</h3>

            <h3 className='paragraph'>Welcome</h3>

            <img src={mail} alt="" />

            <p className='paragraph'>An activation link has been sent to 'e-mail' Please click on the link to verify your email and activate your TradExpress account.</p>

            <Link><button className='continue sign'>Continue</button></Link>

            <p className='paragraph'>Didn't get an email? Kindly click resend email Wrong email supplied? Edit email address</p>


        </div>



    </div>
  )
}

export default Verify