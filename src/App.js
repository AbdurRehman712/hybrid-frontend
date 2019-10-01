import React , { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './compontents/sections/header/Header';
import Footer from './compontents/sections/footer/Footer';
import ContactPage from './compontents/pages/ContactPage';
import LoginPage from './compontents/pages/LoginPage';
import FindCarPage from './compontents/pages/FindCarPage';
import BuyingProcess from './compontents/pages/BuyingProcess';
import HomePage from './compontents/pages/HomePage';
import ProductPage from './compontents/pages/ProductPage';
import EnquiryPage from './compontents/pages/EnquiryPage';
import ThanksPage from './compontents/pages/ThanksPage';
import PaymentAssessment from './compontents/pages/PaymentAssessmentPage';
class App extends Component {
  render() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/buying-process' component={BuyingProcess} />
          <Route exact path='/find-car' component={FindCarPage} />
          <Route exact path='/product-page' component={ProductPage} />
          <Route exact path='/enquiry-form' component={EnquiryPage} />
          <Route exact path='/thanks' component={ThanksPage} />
          <Route exact path='/payment-assessment' component={PaymentAssessment} />
        </Switch>
        <Footer />
    </div>
  );
}
}


export default App;
