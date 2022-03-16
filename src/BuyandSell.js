import React from 'react'
import picture from './images/Group 52.svg'
import picture2 from './images/Group 28.svg'

const BuyandSell = () => {
  return (
    <div className='why'>

    <h1>Buy and Sell your Cryptocurrency in 3 simple steps</h1>

    <div className='create'>
        <section className='createsection'>
        <h3>Create a free Account</h3>
        <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
        </section>

        <img className='wallet' src={picture} alt="" />
    </div>
    <div className='create cre'>
        <img className='wallet' src={picture} alt="" />
        
        <section className='createsection'>
        <h3>Deposit</h3>
        <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
        </section>

    </div>
    <div className='create'>

        <section className='createsection'>
        <h3>Buy/ Sell Crypto</h3>
        <p>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.</p>
        </section>
        <img className='wallet' src={picture2} alt="" />

    </div>


    </div>
  )
}

export default BuyandSell