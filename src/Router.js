import React from 'react'
import { Switch ,Route } from 'react-router-dom'
import Accueil from './components/accueil/Accueil'
import InfosPatient from './components/infosPatient/InfosPatient'
import Order from './components/order/Order'
import Pilule from './components/pilule/Pilule'
import Rdv from './components/rdv/Rdv'
import Footer from './components/footer/Footer'
import BarNav from './components/barNav/BarNav'

const Router = () =>{
return (
  <>
    <BarNav />
    <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/Order" component={Order} />
        <Route path="/Pilule" component={Pilule} />
        <Route path="/InfosPatient" component={InfosPatient} />
        <Route path="/Rdv" component={Rdv} />
    </Switch> 
    {/* <Footer/> */}
  </>
);
}
export default Router



