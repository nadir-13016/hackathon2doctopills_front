import React from 'react'
import './pilule.css'
import {useState} from 'react'
import imagePill from './assets/pillbox.png'


const Pilule = () => {

    const [pill,setPill] = useState([{
        name: 'doliprane',
        duree : 2,
        morning:true
    },{
        name:'advil',
        duree:3,
        morning:false
    },{
        name:'smecta',
        duree:6,
        morning:true
    }])
const [pillBox,setPillBox] = useState([])

   const dureeMax = () => {
       let durMax = 0
       pill.forEach(e => { 
           if(e.duree > durMax){
              return durMax = e.duree
                
           }
      })
       return durMax 
   }

console.log(dureeMax())
   
   let day = 1

   for(let i = 1;i <= dureeMax();i++){
       pillBox.push(<>
       <h3 className="day">Day :{i}</h3>
       {pill.map(x => {
       return(
           <>
           { i <= x.duree &&    
        <div className='tableau'>
                <div className='container'>
           <h4>{x.name}</h4>
                </div>
                <div className='container_day'>
                    <div className='morning'>
                    <p>Morning</p>
                    {x.morning === true &&
                      <img src={imagePill} alt='pill' width='50px'/>}
                    </div>
                    <div className='morning'>
                    <p>Midday</p>
                    <p>1 medoc</p>
                    </div>
                    <div className='morning'>
                    <p>Evening</p>
                    <p>1 medoc</p>
                    </div>
                    <div className='morning4'>
                    <p>Night</p>
                    <p>1 medoc</p>
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

{/* <table>
                <thead>
                <tr>
                    <th>Doliprane</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Morning</td>
                    <td>Midday</td>
                    <td>Evening</td>
                    <td>Night</td>
                </tr>
                </tbody>

                <tfoot>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                </tfoot>
            </table> */}