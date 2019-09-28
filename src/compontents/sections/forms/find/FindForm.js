import React, { Component } from 'react';
import { Container, Row, Col, Form, InputGroup, Button} from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import './find-form.css'

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class FindForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: '#1569a8',
            active: false
        }
    }
    handleChange = (e) => {
        this.setState({
          oldColor: this.state.color,
          color: e.target.value,
          active: !this.state.active,
        });
    };
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
                                            <Form.Row className="ml-0 mr-0 color-picker">
                                                <InputGroup className="mb-3 color-selector">
                                                    <Form.Control
                                                    placeholder="First color *"
                                                    aria-label="First color *"
                                                    disabled
                                                    />
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text className="color-selector">
                                                            <span className="circle" style={{ background: this.state.color, backgroundImage: "url(/assets/images/color-wheel.png)" }} />
                                                        </InputGroup.Text>
                                                        <InputGroup.Text className="color-selector">
                                                            <input
                                                                type="color"
                                                                value={this.state.color}
                                                                onChange={this.handleChange}
                                                                className="hidden"
                                                                />
                                                                Use color pallete
                                                            </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                </InputGroup>
                                                <Button className="color-more bg-transparent" block>
                                                    Add a color…
                                                </Button>
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
                                <Form.Row className="info label mt-5 mb-5">
                                    <Form.Group as={Col} controlId="formGridMsg">
                                        <Form.Label>Else about the car you’re looking after</Form.Label>
                                        <Form.Control as="textarea" rows="6" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className="info label mb-5">
                                    <Form.Group as={Col} controlId="formGritime">
                                        <Form.Label>Timeframe and financing</Form.Label>
                                        <Form.Control as="select">
                                            <option>When do you want it?</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPay">
                                        <Form.Label> <br  /> </Form.Label>
                                        <Form.Control as="select">
                                            <option>How will you pay for it?</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className="info">
                                    <Form.Label>Timeframe and financing</Form.Label>
                                </Form.Row>
                                <Form.Row className="info">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Control type="text" required  />
                                        <Form.Label>Full name</Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridSSC">
                                        <Form.Control type="text" required  />
                                        <Form.Label>Social security number</Form.Label>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className="info mb-5">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control type="email" required  />
                                        <Form.Label>Email</Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCell">
                                        <Form.Control type="text" required  />
                                        <Form.Label>Phone number</Form.Label>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className="mb-5 justify-content-end mr-1">
                                        <Form.Label className="custom-checkbox agree">
                                            I aggree to Hybrids <a className="txt-blue" href="#a"> privacy terms</a>
                                            <input className="remember" type="checkbox" id="remember" />
                                            <span class="checkmark"></span>
                                        </Form.Label>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridSend" className="text-right">
                                        <Button variant="primary" type="submit" className="bg-blue">
                                            Send
                                        </Button>
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
