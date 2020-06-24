import React from 'react'
import './pilule.css'

const Pilule = () => {


    return(
        <>
        <h3 className="day">Day : 1</h3>
        <div className='tableau'>
            <div className='container'>
                <h4>Doliprane</h4>
            </div>
            <div className='container_day'>
                <div className='morning'>
                <p>Morning</p>
                <p>1 medoc</p>
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

        </div>
        </>
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