import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import "./formOrder.css"
// import {createPills} from './PillsFunctions'
const FormOrder = () => {
    const [pills, setPills] = useState({
      pills_name: "",
      pills_picture: "",
      pills_duration: "",
      pills_quantity: "",
      pills_morning: 0,
      pills_midday: 0,
      pills_evening: 0,
      pills_night: 0,
    });
    const queryPills =(e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/pills",pills)
        .then(console.log('data ajoutee'))
    }
console.log(pills)
    return (
      <div className="container">
        <div className="row">
          <div id="centrage" className="col-md-6 mt-5 mx-auto">
            <div className="encadrement">
            <form onSubmit={queryPills}>
              <div className="formulaire">
              <div className="firstTitle">
                <h1 id="fontTitre" className="h4 mb-3 font-weight-normal">
                    Order send by your Doctor
              </h1></div>
                <Link to="/Order">
                <div className="boutonOrder1">
                  <button id="boutonOrder"
                    type="submit"
                    className="btn btn-lg btn-outline-info"
                  >
                      YOUR ORDERS
              </button></div></Link>
              <p></p>
                <div className="firstTitle">
                  <h1 id="fontTitre" className="h4 mb-3 font-weight-normal">Or enter your order manually here</h1>
                </div>
              <div className="input">
              <div class="col">
                <label></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Medication name"
                  value={pills.pills_name}
                  onChange={(e) => setPills({...pills, pills_name:e.target.value})}
                />
                </div>
              <div class="col">
                <label></label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Medication duration /days"
                  value={pills.pills_duration}
                  onChange={(e) => setPills({ ...pills, pills_duration: e.target.value })}
                />
              </div>
              <div class="col">
                <label></label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Medication Quantity"
                  value={pills.pills_quantity}
                  onChange={(e) => setPills({ ...pills, pills_quantity: e.target.value })}
                />
              </div>
              <div className="checkBox">
                      <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="morning"
                  id="pills_morning"
                  value={pills.pills_morning}
                  onChange={(e) => setPills({...pills,pills_morning:!pills.pills_morning})}
                />
                <label class="form-check-label" for="exampleRadios1">
                  To take on morning
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="midday"
                  id="pills_midday"
                  value={pills.pills_midday}
                  onChange={(e) => setPills({ ...pills, pills_midday: !pills.pills_midday })}
                />
                <label class="form-check-label" for="exampleRadios2">
                  To take at midday
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="evening"
                  id="pills_evening"
                  value={pills.pills_evening}
                  onChange={(e) => setPills({ ...pills, pills_evening: !pills.pills_evening })}
                />
                <label class="form-check-label" for="exampleRadios3">
                  To take on evening
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="night"
                  id="pills_night"
                  value={pills.pills_night}
                  onChange={(e) => setPills({ ...pills, pills_night: !pills.pills_night })}
                />
                <label class="form-check-label" for="exampleRadios4">
                  To take during night
                </label>
              </div>
                    </div>
              </div>
                <br />
                  <div className="boutonShare">
                  <label>
                  Share pill's picture
                </label>
                <input
                  type="file"
                      class="form-control-file"
                  id="exampleFormControlFile1"
                  value={pills.pills_picture}
                  onChange={(e) => setPills({ ...pills, pills_picture: e.target.value })}
                    />
                  </div>
              <div className="boutonBas">
              <button
                type="submit"
                className="btn btn-lg btn-outline-info"
              >
                SEND
              </button>
              <Link to ="/pillBox">
              <button
                    type="submit"
                className="btn btn-lg btn-outline-info"
              >
                      PILLS BOX
              </button></Link></div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
}
export default FormOrder