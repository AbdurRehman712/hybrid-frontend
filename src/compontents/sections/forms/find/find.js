import React, { Component } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './Find.css'

class Find extends Component {
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
                                <Form.Row className="info label">
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
                                        <Form.Label>Fuel</Form.Label>
                                            <Form.Row >
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
                                            <Form.Row >
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
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridRight">
                                        
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

export default Find
