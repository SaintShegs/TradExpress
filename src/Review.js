import React from 'react'
import union from './images/Union 1.svg'
import quote from './images/Group 8699.svg'
import me from './images/AARE OLUWATOBI SEGUN.PNG'
import tee from './images/AARE TOLULOPE MARVELOUS.jpg'

const Review = () => {
  return (
    <div  className='why'>
        <h1>Customer's Review</h1>

    <div className='commentSection'>

        <section className='each' >
            <img className='comment' src={union} alt="" />
            <span className='quotation'><img src={quote} alt="" /></span>
            <p className='pop'>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
            <img className='mine' src={me} alt="" />

        </section>

        <section className='each' >
            <img className='comment' src={union} alt="" />
            <span className='quotation'><img src={quote} alt="" /></span>

            <p className='pop'>They have the best rate compared to other platforms with fast payout.</p>
            <img className='mine' src={me} alt="" />
            
        </section>


        <section className='each' >
            <img className='comment' src={union} alt="" />
            <span className='quotation'><img src={quote} alt="" /></span>

            <p className='pop'>Easy to fund and withdraw coins or cash on their platform, I will definitely trade with them again.</p>
            
            <img className='mine' src={me} alt="" />
            
        </section>

    </div>








    </div>
  )
}

export default Review