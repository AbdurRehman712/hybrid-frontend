import React, { Component } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import './find-form.css'

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class FindForm extends Component {
    render() {
        return (
            <section className="findcar">
                <Container>
                    <Row>
                        <Col md={12} className="mb-3">
                            <h2 class="title mb-3">We can find <br /> your dream car</h2>
                            <p>Please fill out all necessary fields</p>
                        </Col>
                        <Col md={12}>
                            <Form className="mb-5">
                                <Form.Row className="info label mb-3">
                                    <Form.Group as={Col} controlId="formGridMake">
                                        <Form.Label>My dream car is</Form.Label>
                                        <Form.Control as="select">
                                            <option>Make</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridModel">
                                        <Form.Label className="text-right">Er bíllinn ekki á skrá? <a className="txt-blue" href="#a">Smelltu hér</a></Form.Label>
                                        <Form.Control as="select">
                                            <option>Model</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className="info label">
                                    <Form.Group as={Col} controlId="formGridLeft">
                                        <Form.Label className="mb-3">Fuel</Form.Label>
                                            <Form.Row className="m-0">
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Hybrid/Bensín"
                                                    name="fuelcheckboxs"
                                                    id="checkbox1"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Hybrid/Dísel"
                                                    name="fuelcheckboxs"
                                                    id="checkboxs2"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Rafmagn"
                                                    name="fuelcheckboxs"
                                                    id="checkboxs3"
                                                />
                                            </Form.Row>
                                            <Form.Row className="m-0 mb-3">
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Bensín"
                                                    name="fuelcheckboxs"
                                                    id="checkbox4"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Dísel"
                                                    name="fuelcheckboxs"
                                                    id="checkboxs5"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Metan"
                                                    name="fuelcheckboxs"
                                                    id="checkboxs6"
                                                />
                                            </Form.Row>
                                            <Form.Label className="mb-3">Gearbox</Form.Label>
                                            <Form.Row className="m-0 mb-3">
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Automatic"
                                                    name="gearboxcheckboxs"
                                                    id="checkbox7"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Manual"
                                                    name="gearboxcheckboxs"
                                                    id="checkboxs8"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Don’t care"
                                                    name="gearboxcheckboxs"
                                                    id="checkboxs9"
                                                />
                                            </Form.Row>
                                            <Form.Label className="mb-3">Drive</Form.Label>
                                            <Form.Row className="m-0 mb-5">
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="4WD"
                                                    name="drivecheckboxs"
                                                    id="checkbox10"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="2WD"
                                                    name="drivecheckboxs"
                                                    id="checkboxs11"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="checkbox"
                                                    label="Don’t care"
                                                    name="drivecheckboxs"
                                                    id="checkboxs12"
                                                />
                                            </Form.Row>
                                            <Form.Label className="mb-3">Does color matter?</Form.Label>
                                            <Form.Row className="m-0 mb-3 radio-options">
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="radio"
                                                    label="Yes"
                                                    name="colorradio"
                                                    id="radio1"
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    type="radio"
                                                    label="No"
                                                    name="colorradio"
                                                    id="radio2"
                                                />
                                            </Form.Row>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridRight">
                                    <Form.Label className="mb-3">Price range</Form.Label>
                                        <div className="range-slider">
                                            <Range />
                                        </div>
                                    <Form.Label className="mb-3">Milage in km</Form.Label>
                                        <div className="range-slider">
                                            <Range />
                                        </div>
                                    <Form.Label className="mb-3">Year</Form.Label>
                                        <div className="range-slider">
                                            <Range />
                                        </div>
                                    <Form.Label className="mb-3">What matters the most</Form.Label>
                                        <Form.Row className="m-0 mb-3 radio-options">
                                            <Form.Check
                                                custom
                                                inline
                                                type="radio"
                                                label="Lowest price"
                                                name="matterradio"
                                                id="radio3"
                                            />
                                            <Form.Check
                                                custom
                                                inline
                                                type="radio"
                                                label="Well equipped car"
                                                name="matterradio"
                                                id="radio4"
                                            />
                                        </Form.Row>
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default FindForm
