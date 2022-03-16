import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Bitcoin = () => {
    const [cryptos, setCryptos ]= useState([])

    useEffect(()=>{
    fetch('https://api.coinlore.net/api/tickers/?start=0&limit=5')
    .then(response => response.json())
    .then(json => setCryptos(json.data))
  })


  return (

 <div className='crypt'>

    <div className='bitcoin'>
        {cryptos.map((crypto)=>{
            return(
                <div className='bit' key={crypto.id}>
                    
                    <div className='bits'>
                    <span>{crypto.symbol}/NGN</span>
                    <span> {crypto.percent_change_1h}%</span>
                  
                    </div>     

                    <h3>{crypto.price_usd}</h3>
                    

                </div>
            )
        })}
    </div>
 </div>
  )
}

export default Bitcoin