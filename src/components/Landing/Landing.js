import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'
import "./landing.css";

const Landing = () => {

    /* Check if subscribe successfull or not */ 
    const [success, setSuccess] = useState(null)
    const [User, setUser] = useState({
        user_lastname: "",
        user_firstname: "",
        user_email: "",
        user_password: "",
        user_num_secu: 0
    })

    const subscribe = (e) => {
        e.preventDefault()
        Axios
            .post('http://localhost:3000/users', User)
            .catch(err => console.error(err))
            .finally(setSuccess(true))
    }

  return (
    //   container pour faire deux colonnes
    <div class="container">
      <div class="row">
        <div class="col">
        {/* colonne de gauche pour le loggin */}
          <div className="login_page">
            <div className="login_forms">
                          <form>
                <label></label>
                  <input
                    className="login_input_text"
                    type="email"
                    placeholder=" Adresse mail"
                  />
                
              </form>
              <form>
                <label></label>
                  <input
                    className="login_input_text"
                    type="password"
                    placeholder=" Mot de passe"
                  />
                
              </form>
              {/* <p>Mot de passe oublié</p> */}
            </div>
            <div>
                          <Link to="./Accueil">
                <button
                    type="submit"
                    className="btn btn-lg btn-outline-info">Loggin
                </button></Link>
            </div>
          </div>
        </div>
        {/* colonne de droite pour le register */}
        <div class="col">
                  <div className="register_page">
                      {success === true ?
                            <div class="alert alert-success" role="alert">
                                  Votre compte est désormais créé, vous pouvez vous connecter.
                            </div>
                                : success === false ?
                                  <div class="alert alert-danger" role="alert">
                                      Un problème est survenu lors de la création de votre compte, veuillez réessayer.
                                    </div>
                                : ''
                      }

                      <div>
                          <form className="register_forms">
                              <label></label>
                                  <input
                                      required
                                      className="register_input_text"
                                      type="text"
                                      placeholder=" Nom"
                                      value={User.user_lastname}
                                      onChange={(e) => setUser({ ...User, user_lastname: e.target.value })}
                                  />
                          </form>
                          <form className="register_forms">
                              <label></label>
                                  <input
                                      required
                                      className="register_input_text"
                                      type="text"
                                      placeholder=" Prénom"
                                      value={User.user_firstname}
                                      onChange={(e) => setUser({ ...User, user_firstname: e.target.value })}
                                  />
                          </form>
                          <form className="register_forms">
                              <label></label>
                                  <input
                                      className="register_input_text"
                                      type="email"
                                      placeholder=" Adresse mail"
                                      required
                                      value={User.user_email}
                                      onChange={(e) => setUser({ ...User, user_email: e.target.value })}
                                  />
                          </form>
                          <form className="register_forms">
                              <label className="register_mdp">
                                  <input
                                      className="register_input_text"
                                      type="password"
                                      placeholder=" Mot de passe"
                                      required
                                      value={User.user_password}
                                      onChange={(e) => setUser({ ...User, user_password: e.target.value })}
                                  />
                              </label>
                          </form>
                          <form className="register_checkbox">
                              <formGroup check inline>
                                <label check>
                                      <input
                                          type="checkbox"
                                          required
                                          id="register_checkbox_inp"
                                          value={User.user_accept_CGV}
                                          onChange={(e) => setUser({ ...User, user_accept_CGV: !User.user_accept_CGV })}
                                      />J'accepte les conditions d!'utilisation
                                </label>
                              </formGroup>
                          </form>
                      </div>

                    {/* {User.user_lastname && User.user_firstname && User.user_password && User.user_email !== '' && User.user_accept_CGV === 1 ? */}
                        <button
                              type="submit"
                          className="btn btn-lg btn-outline-info"
                            //   disabled='false'
                              onClick={(e) => subscribe(e)}>
                              Register
                        </button>
                        {/* : <button
                              type='submit'
                              className='register_button'
                              // disabled='true' 
                              onClick={(e) => subscribe(e)}>
                              CREER UN COMPTE
                        </button> */}
                      
                

                </div>
            </div>
        </div>
    </div>
  );
};
export default Landing;
