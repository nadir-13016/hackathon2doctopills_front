import React, { useEffect } from 'react'
import './pilule.css'
import {useState} from 'react'
import imagePill from './assets/pillbox.png'
import Axios from 'axios'


const Pilule = () => {

   const [pillBox,setPillBox] = useState([])
    const [pill,setPill] = useState([])

    const fetchPill= () =>{
        Axios.get("http://localhost:3001/pills")
        .then(response => setPill(response.data))
    }

useEffect(() =>{
    fetchPill()
},[])


   const dureeMax = () => {
       let durMax = 0
       pill.forEach(e => { 
           if(e.pills_duration > durMax){
              return durMax = e.pills_duration
                
           }
      })
       return durMax 
   }

console.log(dureeMax())
console.log(pill)   
  

   for(let i = 1;i <= dureeMax();i++){
       pillBox.push(<>
       <h3 className="day">Day : {i}</h3>
       {pill.map(x => {
       return(
           <>
           { i <= x.pills_duration &&    
        <div className='tableau'>
                <div className={i%2 === 0 ?'containerPillBox':'containerPillBox2'}>
           <h4 className='pillsName'>{x.pills_name}</h4>
                </div>
                <div className='container_day'>
                    <div className='morning'>
                    <p>Morning</p>
                    {x.pills_morning === true &&
                      <img src={imagePill} alt='pill' width='50px' className='imagePills'/>}
                      {x.pills_morning === true &&
                      <p>{x.pills_quantity} pills</p>}
                    </div>
                    <div className='morning'>
                    
                    <p>Midday</p>
                    {x.pills_midday === true &&
                      <img src={imagePill} alt='pill' className='imagePills1' width='50px'/>}
                      {x.pills_midday === true &&
                    <p>{x.pills_quantity} pills </p>}
                    </div>
                    <div className='morning'>
                    
                    <p>Evening</p>
                    {x.pills_evening === true &&
                      <img src={imagePill} alt='pill' className='imagePills2' width='50px'/>}
                      {x.pills_evening === true &&
                    <p>{x.pills_quantity} pills</p>}
                    </div>
                    <div className='morning4'>
                    
                    <p>Night</p>
                    {x.pills_night === true &&
                      <img src={imagePill} alt='pill'className='imagePills3' width='50px'/>}
                      {x.pills_night === true &&
                    <p>{x.pills_quantity} pills</p>}
                    </div>
                </div>
           </div>}</>)})}
       </>)
       }
    

    return(
        <div>  
            {pillBox}
        </div>
    )
}


export default Pilule

