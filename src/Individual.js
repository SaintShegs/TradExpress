import React from 'react'
import './Getstarted.css'
import {Link} from 'react-router-dom'
import useState from 'react-hook-use-state'
import Verify from './Verify'

const Individual = () => {

  const [name, setName] = useState("");
  
  
  // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   alert(`The name you entered was: ${name}`)
    // }
    
    
    
    
    
    
    
    return (
    <div>


      <div className='getstarted'>
        
        <h3>Welcome</h3>


        <div className='getlinks'>
        <Link to='./Individual' className='but butactive'>Individual</Link>
        <Link to='./Business' className='but'>Business</Link>
        </div>
       


        <form action="">

      <div className='inputs'>

       <input className='datas' type="text" name="username" id="" placeholder='Username' />
       
       <input className='datas' type="text" name="fullname" id="f-name" value={name} onChange={(e) => setName(e.target.value)}
 placeholder='Full Name' />

       <input className='datas' type="email" name="Email" id="e-mail" placeholder='E-mail' />

       <input className='datas' type="tel" name="telephone" id="" placeholder='Phone Number' />

       <input className='datas' type="text" name="Referal" id="" placeholder='Referal Code (Optional)' />

       <p>By clicking the Sign Up button below, you agree to TradExpress <a className='getanchor' href=""> terms and service </a></p>

       <Link to='./Verify' className='sign'>Sign Up</Link>

       <p>Already have an account? <Link  to='./Login' className='getanchor'>Click here</Link></p>
      </div>
       </form>





    </div>



    </div>
  )
}

export default Individual