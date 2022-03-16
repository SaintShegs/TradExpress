import React from 'react'
import facebook from './images/Icon awesome-facebook.svg'
import whatsapp from './images/Icon ionic-logo-whatsapp.svg'
import telegram from './images/Icon awesome-telegram.svg'
import twitter from './images/Icon awesome-twitter.svg'
import courtesy from './images/Group 78.svg'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className='last'>

    <div  className='footer'>

        <section className='foot'>
            <h3>Products</h3>
            <li className='fiat'><Link  className='links'>Bitcoin</Link></li>
            <li className='fiat'><Link  className='links'>Ait</Link></li>
            <li className='fiat'><Link  className='links'>Fiat</Link></li>
            <li className='fiat'><Link  className='links'>Refil</Link></li>
            <li className='fiat'><Link  className='links'>P2P</Link></li>
            
        </section>

        <section className='foot vis'>
        <h3>Learn</h3>
            <li className='fiat'><Link  className='links'>Blog</Link></li>
            <li className='fiat'><Link  className='links'>Health Center</Link></li>

        </section>

        <section className='foot'>
        <h3>Contact</h3>
            <li className='fiat'><Link  className='links'>hello@tradeexpress.com</Link></li>
            <li className='fiat'><Link  className='links'>support@tradeexpress.com</Link></li>
           <div className='social'>
            <Link><img src={twitter} alt="" /></Link>
            <Link><img src={telegram} alt="" /></Link>
            <Link><img src={whatsapp} alt="" /></Link>
            <Link><img src={facebook} alt="" /></Link>
            </div>

        </section>

        <section className='foot'>
        <h3>Company</h3>
            <li className='fiat'><Link  className='links'>About us</Link></li>
            <li className='fiat'><Link  className='links'>Careers</Link></li>
            <li className='fiat'><Link  className='links'>Rates</Link></li>
            <li className='fiat'><Link  className='links'>Mobile</Link></li>

        </section>

        <section className='foot vis'>
        <h3>Legal</h3>
            <li className='fiat'><Link className='links'>Privacy Policy</Link></li>
            <li className='fiat'><Link className='links'>Anti-Money Laundering</Link></li>
            <li className='fiat'><Link className='links'>Terms and Conditions</Link></li>

        </section>

    </div>

    <div className='coutersy'>
        <img className='cou' src={courtesy} alt="" />
    </div>
       




    </div>
  )
}

export default Footer