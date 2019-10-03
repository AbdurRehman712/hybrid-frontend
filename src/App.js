import React , { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/sections/header/Header';
import Footer from './components/sections/footer/Footer';
import ContactPage from './components/pages/ContactPage';
import LoginPage from './components/pages/LoginPage';
import FindCarPage from './components/pages/FindCarPage';
import BuyingProcess from './components/pages/BuyingProcess';
import HomePage from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';
import EnquiryPage from './components/pages/EnquiryPage';
import ThanksPage from './components/pages/ThanksPage';
import PaymentAssessment from './components/pages/PaymentAssessmentPage';
import RequestsPage from './components/pages/RequestsPage';
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
          <Route exact path='/requests' component={RequestsPage} />
        </Switch>
        <Footer />
    </div>
  );
}
}


export default App;
