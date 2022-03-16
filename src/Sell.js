import React from 'react'
import './Getstarted.css'
import { Link } from 'react-router-dom'

const Sell = () => {
  return (
    <div>

        <div className="getstarted">



        <h3>
        Buy/Sell Instantly
        </h3>

        <div className='getlinks'>
        <Link to='./Buy' className='but'>Buy</Link>
        <Link to='./Sell' className='but'>Sell</Link>
        </div>

        <section className='curr'>
            <h5 className='coin'>Coin to Sell</h5>
            <select className='datas' name="Coin_to_buy" id="Coin_to_buy">
            <option value="BTC">Bitcoin(BTC)</option>
            <option value="ETH">Etheureun(ETH)</option>
            <option value="USDT">USDT</option>
            <option value="XRP">XRP</option>
            </select>
        </section>
        <section className='curr'>
            <h5 className='coin'>Currency</h5>
            <select className='datas' name="Currency" id="Currency">
            <option value="NGN">Naira (NGN)</option>
            <option value="USD">Dollars (USD)</option>
            <option value="GBP">Pounds (GBP)</option>
            <option value="EUR">EURO (EUR)</option>
            </select>
        </section>

        <section className='curr'>
            <h5 className='coin'>Quantity</h5>

            <span className='amo'>

            <input className='ngn datas' type="text" name="" id="" value='USD' disabled />

            <input className='ngnn datas' type="text" name="" id="" />
            </span>
        </section>

        <button className=' sign continue'>Continue</button>
      







        </div>




    </div>
  )
}

export default Sell