import React, { useState, useEffect } from 'react'
import Axios from 'axios'



function InfosPatient() {
    const [info, setInfo]=useState({
        infoPatient_adress:'',
        infoPatient_postal_code:'',
        infoPatient_size: '',
        infoPatient_Wheight:'',
        infoPatient_allergy: 0,
        infoPatient_allergy1:'',
        infoPatient_allergy2: '',
        infoPatient_allergy3:'',
        infoPatient_chronic_condition: 0,
        infoPatient_chronic_condition1: '',
        infoPatient_chronic_condition2: '',
        infoPatient_chronic_condition3: '',
        infoPatient_been_surgered: 0,
        infoPatient_blood_type:''
    })

    useEffect(() => fetchData(),[])

    const fetchData =()=>{
        Axios.post(`http://localhost:3000/infopatiens`, info)
        .then(res=>setInfo(res.data))
        .catch(err => console.error(err))
    }

    const [user, setUser]=useState([])
    useEffect(() => fetchData2(),[])
    const fetchData2 =()=>{
        Axios.get(`http://localhost:3000/users`)
        .then(res=>setUser(res.data))
        .catch(err => console.error(err))
    }
    
    return (
        <div>
            <form onSubmit={fetchData}>
                <input type='text' value={info.infoPatient_adress} onChange={(e)=> setInfo ({...info, infoPatient_adress : e.target.value})} placeholder='Adress'  />
                <input type='text' value={info.infoPatient_postal_code} onChange={(e)=> setInfo ({...info, infoPatient_postal_code : e.target.value})} placeholder='Postal Code'  />
                <input type='text' value={info.infoPatient_wheight} onChange={(e)=> setInfo ({...info, infoPatient_wheight : e.target.value})} placeholder='Wheight'  />
                <input type='text' value={info.infoPatient_size} onChange={(e)=> setInfo ({...info, infoPatient_size : e.target.value})} placeholder='Size'  />
                <input type='text' value={info.infoPatient_allergy1} onChange={(e)=> setInfo ({...info, infoPatient_allergy1 : e.target.value})} placeholder='Allergy'  />
                <input type='text' value={info.infoPatient_allergy2} onChange={(e)=> setInfo ({...info, infoPatient_allergy2: e.target.value})} placeholder='Allergy'  />
                <input type='text' value={info.infoPatient_allergy3} onChange={(e)=> setInfo ({...info, infoPatient_allergy3 : e.target.value})} placeholder='Allergy'  />
                <input type='text' value={info.infoPatient_chronic_condition1} onChange={(e)=> setInfo ({...info, infoPatient_chronic_condition1 : e.target.value})} placeholder='Chronic Condition'  />
                <input type='text' value={info.infoPatient_chronic_condition2} onChange={(e)=> setInfo ({...info, infoPatient_chronic_condition2 : e.target.value})} placeholder='Chronic Condition'  />
                <input type='text' value={info.infoPatient_chronic_condition3} onChange={(e)=> setInfo ({...info, infoPatient_chronic_condition3 : e.target.value})} placeholder='Chronic Condition'  />
                <input type='text' value={info.infoPatient_blood_type} onChange={(e)=> setInfo ({...info, infoPatient_blood_type : e.target.value})} placeholder='Blood Type'  />
                <button type ='submit'> Valider </button>

            </form>




                <h1>Profil</h1>

                <p>Name:{user_lastname} {user_firstname} </p>
                <p>Sécurity Number : {user_num_secu}  </p>
                <p>Phone Number : {user_number} </p>
                <p>Adress : {infoPatient_adress} </p>
                <p>Postal Code: {infoPatient_postal_code} </p>
                <p>Size: {infoPatient_side} </p>
                <p>Wheigt: {infoPatient_} </p>
                <p>Allergy :{{infoPatient_allergy} === true ? `{infoPatient_allergy1} {infoPatient_allergy2} {infoPatient_allergy3}`:`none`} </p>
                <p>Chronic condition : {{infoPatient_chronic_condition} === true ? `{infoPatient_chronic_condition1} {infoPatient_chronic_condition2} {infoPatient_chronic_condition3}`:`none`}  </p>
                <p>Been surgered: {infoPatient_been_surgered} </p>
                <p>Blood: {infoPatient_blood_type} </p>
            
        </div>
    )
}

export default InfosPatient
