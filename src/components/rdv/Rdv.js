import React, { useState, useEffect } from 'react'
import './rdv.css'
import Axios from 'axios'



const Rdv = () => {

const [rdvConfirmed,setRdvConfirmed] = useState(true)

const [rdv,setRdv]= useState({
    rdv_date:'',
    rdv_heure:'',
    rdv_docteur:'',
    rdv_speciality:'',
    rdv_adress:'',
    rdv_reccurence:'',
    rdv_confirmed:false
})

const [myrdv,setMyrdv] = useState ([])  


useEffect(() => {
  fetchData()
}, [])

const fetchData = ()=>{
  Axios.get('http://localhost:3000/rdvs')
  .then(response => setMyrdv(response.data))
}


const postData = (e) =>{
  e.preventDefault()
    Axios.post('http://localhost:3000/rdvs',rdv)
    .then(fetchData)
}

console.log(rdvConfirmed)
    return (
        <>      
                <h4 className='titreFormRdv'>Titre</h4>
                <form noValidate id='formRdv' onSubmit={postData}>
              <div >
                <label></label>
                <input
                  type="text"
                  class=""
                  value={rdv.rdv_date}
                  onChange={(e) => setRdv({...rdv, rdv_date:e.target.value})}
                />
              </div>
              <div >
                <label></label>
                <input
                  type="time"
                  class="inputTime"
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
                  type="number"
                  class=""
                  placeholder=''
                  value={rdv.rdv_reccurence}
                  onChange={(e) => setRdv({...rdv,rdv_reccurence:e.target.value})}
                />
              </div>
              <div >
                <label></label>
                <input
                  type="checkbox"
                  class=""
                  placeholder=''
                  value={rdv.rdv_confirmed}
                  onChange={(e) => setRdv({...rdv,rdv_confirmed:!rdv.rdv_confirmed})}
                />
              </div>
              <button className="buttonRdvPost" type='submit'>Send</button>
              </form>
              <div className='containerResRdv'>
              <button className='buttonRdvConfirmed' onClick={() => setRdvConfirmed(!rdvConfirmed)}>My appointment</button>
              <h4 className='titreConfirmed'>{rdvConfirmed?'Confirmed appointment':'Unconfirmed appointment'}</h4>
              {myrdv.filter(rdv => rdv.rdv_confirmed === rdvConfirmed).map(myrdv=> <div> <p>Adress: {myrdv.rdv_adress} </p>
                <p>{myrdv.rdv_confirmed === true?`Date : ${myrdv.rdv_date}`:''} </p>
                <p>Docteur: {myrdv.rdv_docteur} </p>
                <p>{myrdv.rdv_confirmed === true?`Heure: ${myrdv.rdv_heure}`:''} </p>
                <p>Speciality:{myrdv.rdv_speciality} </p>
                <p>Reccurency: {myrdv.rdv_reccurence} week  </p>
                <p>Confirmed: {myrdv.rdv_confirmed === true ? `Yes`:`No`}  </p>
               </div>)}
               </div>

  
        </>
    )
}

export default Rdv