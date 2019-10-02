import React, { Component } from 'react';
import Thanks from '../sections/thanks/Thanks';


import AOS from 'aos';
import 'aos/dist/aos.css';

class ThanksPage extends Component {
    componentDidMount() {
        AOS.init({
            duration : 1000
          })
    }
    render() {
        return (
            <div data-aos='fade-up'>
                <Thanks />
            </div>
        )
    }
}

export default ThanksPage
