import React, { Component } from 'react';
import Product from '../../product/Product';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './enquiry-form.css'

class EnquiryForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            listLayout: true,
        }
    }
    render() {
        return (
            <section className="enquiry">
                <Container>
                    <Row>
                        <Col md={12} className="mb-5">
                            <h2 class="title">Send in enquiry</h2>
                        </Col>
                    </Row>
                </Container>
                <Product listLayout={this.state.listLayout} />
                <Container>
                    <Row>
                        <Col md={12}>
                            <Form>
                            <Form.Row className="info label mt-5 mb-5">
                                    <Form.Group as={Col} controlId="formGridMsg">
                                        <Form.Label>What do you want to know about the car?</Form.Label>
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
                                        Ég samþykki <a className="txt-blue" href="#a">persónuskilmála </a> Hybrid.is
                                            <input className="remember" type="checkbox" id="remember" />
                                            <span class="checkmark"></span>
                                        </Form.Label>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridSend" className="text-right">
                                        <Button as={Link} to="/thanks" variant="primary" type="submit" className="bg-blue">
                                            Senda inn beiðni
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

export default EnquiryForm
