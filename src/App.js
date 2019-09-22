import React , { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './compontents/sections/header/Header';
import Footer from './compontents/sections/footer/Footer';
import ContactPage from './compontents/pages/ContactPage';
import LoginPage from './compontents/pages/LoginPage';
import Home from './compontents/pages/Home';
class App extends Component {
  render() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
        <Footer />
    </div>
  );
}
}


export default App;
