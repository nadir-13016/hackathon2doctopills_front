import React from 'react'
import { Switch ,Route } from 'react-router-dom'
import Accueil from './components/accueil/Accueil'
import InfosPatient from './components/infosPatient/InfosPatient'
import FormOrder from './components/formOrder/FormOrder'
import Pilule from './components/pilule/Pilule'
import Rdv from './components/rdv/Rdv'
import Footer from './components/footer/Footer'
import BarNav from './components/barNav/BarNav'
// import ChatBot from "./components/chatBot/ChatBot";

const Router = () =>{
return (
  <>
    <BarNav />
   
    <Switch>
      {/* <Route exact path="/" component={Accueil} /> */}
      <Route path="/order" component={FormOrder} />
      <Route path="/pillBox" component={Pilule} />
      {/* <Route path="/InfosPatient" component={InfosPatient} />
      <Route path="/Rdv" component={Rdv} /> */} 
     </Switch>
     {/* <Footer/>*/}
  </>
);
}
export default Router



