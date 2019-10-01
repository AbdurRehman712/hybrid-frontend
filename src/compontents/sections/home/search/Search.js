import React, { Component } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import './Search.css';

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Search extends Component {
    render() {
        return (
            <>
                <section className="search-header d-flex justify-content-center">
                    <img src="/assets/images/search-car.png" alt="Search Car" />
                </section>
                <section className="search">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Form className="mb-lg-5">
                                    <Form.Row className="info label">   
                                        <Form.Group as={Col} controlId="formGridLeft" className="P-0">
                                            <Form.Row className="info label mb-5 car-type">
                                                <Form.Row className="pr-md-5 m-0">
                                                    <Form.Label>Make</Form.Label>
                                                    <Form.Control as="select">
                                                        <option>Aston Martin</option>
                                                        <option>Audi</option>
                                                        <option>Mercedes Benz</option>
                                                        <option>Volkswagen</option>
                                                        <option>Yamaha</option>
                                                    </Form.Control>
                                                </Form.Row>
                                                <Form.Row className="pr-md-5 m-0">
                                                    <Form.Label>Model</Form.Label>
                                                    <Form.Control as="select">
                                                        <option>C-Class</option>
                                                        <option>...</option>
                                                    </Form.Control>
                                                </Form.Row>
                                            </Form.Row>
                                            <Form.Label className="mb-3">Type</Form.Label>
                                                <Form.Row className="m-0 mb-5 type">
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        type="checkbox"
                                                        label="Automatic"
                                                        name="typecheckboxs"
                                                        id="checkbox1"
                                                        className="mr-md-5"
                                                    />
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        type="checkbox"
                                                        label="Manual"
                                                        name="typecheckboxs"
                                                        id="checkboxs2"
                                                        className="mr-md-5"
                                                    />
                                                </Form.Row>
                                                <Form.Label className="mb-3">Aflgjafi</Form.Label>
                                                <Form.Row className="m-0 mb-3 fuel-type">
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        type="checkbox"
                                                        label="Hybrid"
                                                        name="fuelcheckboxs"
                                                        id="checkbox3"
                                                    />
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        type="checkbox"
                                                        label="Electric"
                                                        name="fuelcheckboxs"
                                                        id="checkboxs4"
                                                    />
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        type="checkbox"
                                                        label="Petrol"
                                                        name="fuelcheckboxs"
                                                        id="checkboxs5"
                                                    />
                                                </Form.Row>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridRight" className="range-filter">
                                                <Form.Label className="mb-3">Price range</Form.Label>
                                                    <div className="range-slider">
                                                        <Range tipFormatter={value => `${value} kr`} />
                                                    </div>
                                                <Form.Label className="mb-3">Milage in km</Form.Label>
                                                    <div className="range-slider">
                                                        <Range tipFormatter={value => `${value} kr`} />
                                                    </div>
                                                <Form.Label className="mb-3">Year</Form.Label>
                                                    <div className="range-slider">
                                                        <Range tipFormatter={value => `${value} kr`} />
                                                    </div>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row className="text-right">
                                        <Form.Group as={Col} controlId="formGridDetail">
                                            <Form.Label className="mb-3 detail-search"> <a className="txt-blue" href="#a"> <span>+ </span> Detailed search</a></Form.Label>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="notification-box" controlId="formGridNotification">
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Notification for new entries"
                                                    name="fuelcheckboxs"
                                                    id="checkboxs6"
                                                />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridResult" className="text-right">
                                            <Button className="btn-result bg-blue"> <span className="qtn">5</span>Results</Button>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default Search
