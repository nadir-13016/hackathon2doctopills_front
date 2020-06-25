import React, { useState, useEffect } from 'react'
import axios from 'axios'



function InfosPatient() {
    const [info, setInfo ]=useState([])
    useEffect(() => {fetchData()},[])
    const fetchData =(e)=>{
        axios.get(`http://localhost:3000/InfoPatients`)
        .then(res=> setInfo(res.data))
        .catch(err => console.error(err))
        
    }
console.log(info)

    const [user, setUser]=useState([])
    useEffect(() => {fetchData2()},[])
    const fetchData2 =()=>{
        axios.get(`http://localhost:3000/users`)
        .then(res=>setUser(res.data))
        .catch(err => console.error(err))
    }
    
    return (
        <div>
                <h1>Profil</h1>

               {user.map(user =><>(<p>Name:{user.user_lastname} {user.user_firstname} </p>
                <p>Sécurity Number: {user.user_num_secu}  </p>
                <p>Phone Number: {user.user_number} </p></>)}


{info.map(info=>  <> <p>Adress: {info.infoPatient_adress} </p>
                <p>Postal Code: {info.infoPatient_postal_code} </p>
                <p>Size: {info.infoPatient_size} </p>
                <p>Wheigt: {info.infoPatient} </p>
                <p>Allergy:{info.infoPatient_allergy === true ? `${info.infoPatient_allergy1} ${info.infoPatient_allergy2} ${info.infoPatient_allergy3}`:`none`} </p>
                <p>Chronic condition: {info.infoPatient_chronic_condition === true ? `${info.infoPatient_chronic_condition1} ${info.infoPatient_chronic_condition2} ${info.infoPatient_chronic_condition3}`:`none`}  </p>
                <p>Been surgered: {info.infoPatient_been_surgered} </p>
                <p>Blood: {info.infoPatient_blood_type} </p> </>)}
  
        
        </div>
    )
}

export default InfosPatient
