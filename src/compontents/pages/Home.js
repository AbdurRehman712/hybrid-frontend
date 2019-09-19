import React, { Component } from 'react';
import Main from '../sections/home/main/Main';
import Funding from '../sections/home/funding/Funding';
import Insurance from '../sections/home/insurance/Insurance';

class Home extends Component {
    render() {
        return (
            <>
                <Main />
                <Funding />
                <Insurance />
            </>
        )
    }
}

export default Home
