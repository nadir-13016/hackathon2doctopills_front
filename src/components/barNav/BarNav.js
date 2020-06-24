import React from 'react'
import './barNav.css'
import {Link} from 'react-router-dom'

const BarNav = () =>{

    return(
        <>
   
<nav role="navigation">
  <div id="menuToggle">
  
    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/order">Order</Link></li>
      <li><Link to="/pillbox" >Pillbox</Link></li>
      <li><Link to="/patient-information" >Patient information</Link></li>
      <li><Link to="/appointment" >Appointment</Link></li>
    </ul>
  </div>
</nav>
        </>

    )
}

export default BarNav