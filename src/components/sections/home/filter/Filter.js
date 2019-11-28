import React, { Component } from 'react';
import { Container, Row, Col, Form, OverlayTrigger, Popover} from 'react-bootstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';
import {getMakes} from '../../../../services/Requests'

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValuePre: 0,
            sliderValueMonth: 0,
        }
    }

    componentDidMount() {

        let Auth = {
            username:'search-generic',
            password:'search-generic'
        }
        let basicAuth = new Buffer(Auth.username+':'+Auth.password).toString('base64')
        console.log('buffer : ' + basicAuth)
        var myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            myHeaders.append('Authorization', basicAuth);
            // myHeaders.append("Content-Type", "application/xml");
            // myHeaders.append("Accept-Encoding", "gzip");
            // myHeaders.append("Accept-Language", "en");
            // myHeaders.append("Authorization",  "QWxhZGluOnNlc2FtIG9wZW4=");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        
        fetch('https://services.mobile.de/refdata/classes/Car/makes', requestOptions)
        .then(response => response.json())
        .then(result => console.log('Resposesefe :: ' + result))
        .catch(error => console.log('error :: ', error));

        // console.log('In filter')
        // getMakes.subscribe({
        //     next: result => console.log('Result we have :: ' + JSON.stringify(result)),
        //     complete: () => console.log('done')
        // })
    }

    handleValuePre = (sliderValuePre) => {
        this.setState({ sliderValuePre });
    }

    handleValueMonth = (sliderValueMonth) => {
        this.setState({ sliderValueMonth });
    }
    render() {
        const { sliderValuePre, sliderValueMonth } = this.state;
        return (
            <section className="filter" style={this.props.style}>
                <Container>
                    <Row>
                        <Col md={12} className="d-flex justify-content-between flex-wrap align-items-center">
                            <Form.Control as="select" className="mr-3">
                                <option>Aston Martin</option>
                                <option>Audi</option>
                                <option>Mercedes Benz</option>
                                <option>Volkswagen</option>
                                <option>Yamaha</option>
                            </Form.Control>
                            <Form.Control as="select" className="mr-3">
                                <option>C-Class</option>
                                <option>...</option>
                            </Form.Control>
                            <div className="filter-item">
                                Gearbox
                            </div>
                            <div className="filter-item">
                                Fuel
                            </div>
                            <div className="filter-item">
                                Mileage
                            </div>
                            <div className="filter-item">
                                Year
                            </div>
                            <div className="filter-item second-last custom">
                                <img alt="setting" src="assets/images/setting-icon.png" />
                                More
                            </div>
                            <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    overlay={
                                        <Popover id="popover-positioned-bottom">
                                            <Popover.Content>
                                                <div className="cal-div mb-2 d-flex justify-content-between">
                                                    <span>
                                                        Financing
                                                    </span>
                                                    <span>
                                                        {sliderValuePre} %
                                                    </span>
                                                </div>
                                                <Slider 
                                                    defaultValue={sliderValuePre}
                                                    onChange={this.handleValuePre}
                                                    className="mb-5"
                                                />
                                                <div className="cal-div mb-2 d-flex justify-content-between">
                                                    <span>
                                                        Loan term
                                                    </span>
                                                    <span>
                                                        {sliderValueMonth} months
                                                    </span>
                                                </div>
                                                <Slider 
                                                    defaultValue={sliderValueMonth}
                                                    onChange={this.handleValueMonth}
                                                />
                                            </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                    <div className="filter-item custom last bg-blue txt-white">
                                        <img alt="calculate" src="assets/images/calculator-white.png" />
                                        Calculate loan
                                    </div>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Filter
