import React from 'react'
import fond from './asset/fond.png'
import Appointment from './asset/Appointment.png'
import chat from './asset/chat.png'
import order from './asset/order.png'
import patient_info from './asset/patient_info.png'
import pillbox from './asset/pillbox.png'
import './accueil.css'
import { Link } from 'react-router-dom'


function Accueil() {
    return (
             
                <div className="fond" background-image={fond} alt="fond">
                    
                    <div className="pillbox">
                        <img src={pillbox} alt="pillbox" width="30%"/>   
                    </div>  

                    <div className="patient_info">
                        <img src={patient_info} alt="patient_info" width="30%"/>    
                    </div> 

                    <div className="order">
                        <img src={order} alt="order" width="30%"/> 
                    </div>    

                    <div className="chat">
                        <img src={chat} alt="chat" width="30%"/>
                    </div>

                    <div className="Appointment">
                        <img src={Appointment} alt="Appointment" width="30%"/>
                    </div>
                    
                </div> 
        
    )
}

export default Accueil

