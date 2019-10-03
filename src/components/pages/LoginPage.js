import React, { Component } from 'react';
import Login from '../sections/login/Login';

import AOS from 'aos';
import 'aos/dist/aos.css';

class LoginPage extends Component {

    componentDidMount() {
        AOS.init({
            duration : 1000
          })
    }
    
    render() {
        return (
            <div data-aos='fade-up'>
                <Login />
            </div>
        )
    }
}

export default LoginPage;
