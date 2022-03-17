import React from 'react'
import applelogo from './images/Group 68.svg'
import googlelogo from './images/Group 69.svg'
import { Link } from 'react-router-dom'
const Create = () => {
  return (
    <div className='account'>

    <h3 className='free'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</h3>


    <h1 className='free'>Create your account for free and start trading today!</h1>

    <button className='started'>Get Started</button>


    <div className='link'>
        <Link><img className='store' src={applelogo} alt="" /></Link>
        <Link><img className='store' src={googlelogo} alt="" /></Link>
      </div>

    </div>
  )
}

export default Create