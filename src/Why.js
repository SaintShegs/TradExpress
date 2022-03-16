import React from 'react'
import pic from './images/Group 52.svg'

const Why = () => {
  return (
    <div className='why'>

        <h1>Why do people get involved with Cryptocurrencies?</h1>


    <div className='sections'>
        <section className='options'>
            <img className='img' src={pic} alt="" />
            <h3 className='opt'>Easy Mode of Payment</h3>
            <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.</p>
        </section>


        <section className='options'>
             <img className='img' src={pic} alt="" />
             <h3 className='opt'>Financial Freedom</h3>
             <p>Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p>

        </section>


        <section className='options'>
            <img className='img' src={pic} alt="" />
            <h3 className='opt'>Investment</h3>
            <p>The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.</p>

        </section>
        </div>

        <button className='learn'>Learn More</button>

    </div>
  )
}

export default Why