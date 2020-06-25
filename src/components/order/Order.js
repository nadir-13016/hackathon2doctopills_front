import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import "./order.css"

const Order = () => {

    const [order, setOrder] = useState([]);
    useEffect(() => {queryOrder()}, [])

    const queryOrder = (e) => {
        axios.get("http://localhost:3000/Orders")
            .then(console.log('data lue'))
            .then(res => setOrder(res.data))
    }
return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
                        <h1 className="h4 mb-3 font-weight-normal" className='h1Order'>Order send by your Doctor</h1>
                <div className="contenu">
                    {order.map (e => 

                       <ul>
                       <li>
                        <div class="card" style={{width : "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title">Order</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Date: {e.order_date}</h6>
                                <p class="card-text">Doctor: {e.order_medecin}</p>
                                <a href="{e.order_pdf}" class="card-link">PDF link</a>
                                <a href="{e.order_qrcode}" class="card-link">QR Code link</a>
                            </div>
                        </div>
                            </li>
                    
                        </ul> 
                    
                    )}</div>
            </div>
        </div>
    </div>
      

)}
export default Order