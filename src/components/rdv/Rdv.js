import React, { useState, useEffect } from 'react'
import './rdv.css'
import Axios from 'axios'



const Rdv = () =>{

const [rdv,setRdv]= useState({
    rdv_date:'',
    rdv_heure:'',
    rdv_docteur:'',
    rdv_speciality:'',
    rdv_adress:'',
    rdv_reccurence:'',
    rdv_confirmed:false
})


const fetchData = () =>{
    Axios.post('http://localhost:3000/rdvs',rdv)
}
    return(
        <>
                <form noValidate onSubmit={fetchData}>
              <div >
                <label></label>
                <input
                  type="date"
                  class=""
                  value={rdv.rdv_date}
                  onChange={(e) => setRdv({...rdv, rdv_date:e.target.value})}
                />
              </div>
              <div >
                <label></label>
                <input
                  type="time"
                  class=""
                  value={rdv.rdv_heure}
                  onChange={(e) => setRdv({...rdv, rdv_heure:e.target.value})}
                />
              </div>
              <div >
                <label></label>
                <input
                  type="text"
                  class=""
                  placeholder='Doctor name'
                  value={rdv.rdv_docteur}
                  onChange={(e) => setRdv({...rdv, rdv_docteur:e.target.value})}
                />
              </div>
              <div >
                <label></label>
                <input
                  type="text"
                  class=""
                  placeholder='Speciality'
                  value={rdv.rdv_speciality}
                  onChange={(e) => setRdv({...rdv,rdv_speciality:e.target.value})}
                />
              </div>
              <div >
                <label></label>
                <input
                  type="text"
                  class=""
                  placeholder='Adress'
                  value={rdv.rdv_adress}
                  onChange={(e) => setRdv({...rdv,rdv_adress:e.target.value})}
                />
              </div>
              <div >
                <label></label>
                <input
                  type="text"
                  class=""
                  placeholder=''
                  value={rdv.rdv_adress}
                  onChange={(e) => setRdv({...rdv,rdv_adress:e.target.value})}
                />
              </div>
              <div >
                <label></label>
                <input
                  type="checkbox"
                  class=""
                  placeholder=''
                  value={rdv.rdv_confirmed}
                  onChange={(e) => setRdv({...rdv,rdv_confrimed:!rdv.rdv_confirmed})}
                />
              </div>
              </form>

        </>
    )
}

export default Rdv