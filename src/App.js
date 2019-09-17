import React , { Component } from 'react';
import Header from './compontents/sections/header/Header';
import Footer from './compontents/sections/footer/Footer';
import Login from './compontents/sections/login/Login';
class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}
}


export default App;
