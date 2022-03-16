import React from 'react'
import tradLogo from './images/TradExpress.svg'
import {Link} from 'react-router-dom'

import {Navbar, Nav, Container} from 'react-bootstrap'



const Navigator = () => {
  return (
<div className='navb'>
<Navbar bg="" expand="lg" className='mv w-100 m-auto '>
  <Container>

    <Link to='/'> <img  className='logo' src={tradLogo} alt="" /> </Link>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />


    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="w-100  justify-content-end ">

       <div className='li '>
        <Link className='hyper'>Instant Buy/Sell</Link>
        <Link className='hyper'>Learn</Link>
        <Link className='hyper log'>Log In</Link>
        <Link className='hyper get' to='/GetStarted'>Get Started</Link>
       </div>

      </Nav>
    </Navbar.Collapse>


  </Container>
</Navbar>






    </div>
  )
}

export default Navigator