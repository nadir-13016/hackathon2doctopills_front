import React from 'react'
import { Switch ,Route } from 'react-router-dom'
import Accueil from './components/accueil/Accueil'
import InfosPatient from './components/infosPatient/InfosPatient'
import FormOrder from './components/formOrder/FormOrder'
import Order from './components/order/Order'
import Pilule from './components/pilule/Pilule'
import Rdv from './components/rdv/Rdv'
import Chat from './components/chat/Chat'
import BarNav from './components/barNav/BarNav'
import Landing from './components/Landing/Landing'


const Router = () =>{
return (
  <>
    <BarNav />
    
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route path="/form-order" component={FormOrder} />
      <Route path='/Order' component={Order}/>
      <Route path="/pillBox" component={Pilule} />
      <Route path="/InfosPatient" component={InfosPatient} />
      <Route path="/appointment" component={Rdv} />  
      <Route path="/Chat" component={Chat} /> 
     </Switch>
     {/* <Footer/>*/}
  </>
);
}
export default Router



