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

                    <Link to = '/pillBox'>
                        <div className="pillbox">
                            <img className="imgpillbox"src={pillbox} alt="pillbox"/>   
                        </div>  
                    </Link>

                    <Link to = '/InfosPatient'>
                        <div className="patient_info">
                            <img className="imgpatient" src={patient_info} alt="patient_info"/>    
                        </div> 
                    </Link>

                    <Link to = '/Order'>
                        <div className="order">
                            <img className="imgorder" src={order} alt="order"/> 
                        </div>    
                    </Link>

                    <div className="chat">
                        <img className="imgchat" src={chat} alt="chat"/>
                    </div>

                    <Link to = '/Rdv'>
                        <div className="Appointment">
                            <img className="imgAppointment" src={Appointment} alt="Appointment"/>
                        </div>
                    </Link>
                    
                </div> 
        
    )
}

export default Accueil

