import React from 'react'
import { Switch ,Route } from 'react-router-dom'
import Accueil from './components/accueil/Accueil'
import InfosPatient from './components/infosPatient/InfosPatient'
import FormOrder from './components/formOrder/FormOrder'
import Order from './components/order/Order'
import Pilule from './components/pilule/Pilule'
import Rdv from './components/rdv/Rdv'
import Footer from './components/footer/Footer'
import BarNav from './components/barNav/BarNav'
import Landing from './components/Landing/Landing'
// import ChatBot from "./components/chatBot/ChatBot";

const Router = () =>{
return (
  <>
    {/* <BarNav /> */}
    <Landing />
    <Switch>
      {/* <Route exact path="/" component={Accueil} /> */}
      <Route path="/FormOrder" component={FormOrder} />
      <Route path="/Order" component={Order} />
      {/* <Route path="/ChatBot" component={ChatBot} /> */}
      <Route path="/Pilule" component={Pilule} />
      {/* <Route path="/InfosPatient" component={InfosPatient} />
      <Route path="/Rdv" component={Rdv} /> */}
    </Switch>
    {/* <Footer/>*/}
  </>
);
}
export default Router



