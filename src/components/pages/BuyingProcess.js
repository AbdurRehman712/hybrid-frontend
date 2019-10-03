import React, { Component } from 'react';
import Main from '../sections/buyingprocess/main/Main';
import Funding from '../sections/buyingprocess/funding/Funding';
import Insurance from '../sections/buyingprocess/insurance/Insurance';
import Cost from '../sections/buyingprocess/cost/Cost';

class BuyingProcess extends Component {
    render() {
        return (
            <>
                <Main />
                <Funding />
                <Insurance />
                <Cost />
            </>
        )
    }
}

export default BuyingProcess
