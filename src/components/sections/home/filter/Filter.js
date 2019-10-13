import React, { Component } from 'react';
import { Container, Row, Col, Form, OverlayTrigger, Popover} from 'react-bootstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValuePre: 0,
            sliderValueMonth: 0,
        }
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
