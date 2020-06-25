import React from 'react'
import './barNav.css'
import {Link} from 'react-router-dom'

const BarNav = () =>{

    return(
        <>
        <h1 className="title_doctopills"><Link className='titreLink' style={{ textDecoration: 'none' }} to="/">Doctopills</Link></h1>
<nav role="navigation" className="barNav">

  <div id="menuToggle">
  
    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/order">Order</Link></li>
      <li><Link to="/pillBox" >Pillbox</Link></li>
      <li><Link to="/patient-information" >Patient informations</Link></li>
      <li><Link to="/appointment" >Appointment</Link></li>
      <li><Link to="/chat">Chat</Link></li>
    </ul>
  </div>
</nav>
</>
    );
}

export default BarNav