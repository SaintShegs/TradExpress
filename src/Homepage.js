import React from 'react'
import Bitcoin from './Bitcoin'
import apple from './images/Group 68.svg'
import google from './images/Group 69.svg'
import { Link } from 'react-router-dom'
import Why from './Why'
import BuyandSell from './BuyandSell'
import Create from './Create'
import Review from './Review'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div >


       <div className='home'>
       <section className='buy'>
              <h1> Buy, sell and manage your Crypto on TradExpress.</h1>

        </section>

    
        <section className='homepara'>
               <p>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</p>
        </section>

        <Link to='./GetStarted'><button className='start'>Get Started</button></Link>

      <div className='apple'>
        <Link><img className='sto' src={apple} alt="" /></Link>
        <Link><img className='sto' src={google} alt="" /></Link>
      </div>
       </div>

        <Bitcoin/>
        <Why/>
        <BuyandSell/>
        <Create/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Homepage