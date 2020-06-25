import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
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
        axios.post("http://localhost:3000/Pills",pills)
        .then(console.log('data ajoutee'))
    }

console.log(pills)
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={queryPills}>
              <h1 className="h3 mb-3 font-weight-normal">
                Please enter the pills' infos
              </h1>

              <div class="col-7">
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
                  Totake on evening
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
              <div class="form-group">
                <br />
                <label for="exampleFormControlFile1">
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
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default FormOrder