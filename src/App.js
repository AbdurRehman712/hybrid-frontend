import React , { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './compontents/sections/header/Header';
import Footer from './compontents/sections/footer/Footer';
import Login from './compontents/sections/login/Login';
import Home from './compontents/pages/Home';
class App extends Component {
  render() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Footer />
    </div>
  );
}
}


export default App;
