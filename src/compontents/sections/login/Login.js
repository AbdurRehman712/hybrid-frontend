import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css'
export class Login extends Component {
    render() {
        return (
            <section className="login">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h1>Innskráning</h1>
                            <p className="mb-5">Ekki með aðgang? <a className="txt-blue" href="#">Smelltu hér</a></p>
                            <Form className="mb-5">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" required  />
                                    <Form.Label>Notandanafn</Form.Label>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword" className="mb-4">
                                    <Form.Control type="password" required />
                                    <Form.Label>Lykilorð</Form.Label>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="bg-blue" block>
                                    Innskrá
                                </Button>
                            </Form>
                            <div className="d-flex justify-content-between">
                                <Form.Label className="custom-checkbox">
                                    Muna eftir mér
                                    <input className="remember" type="checkbox" id="remember" />
                                    <span class="checkmark"></span>
                                </Form.Label>
                                <p className="forget"><a className="txt-blue" href="">Týnt lykilorð?</a></p>
                            </div>
                        </Col>
                        <Col md={1} className="login-with d-flex flex-column justify-content-center align-items-center">
                            <div>
                                <span className="line"></span>
                                <span className="or">EDA</span>
                                <span className="line"></span>
                            </div>
                        </Col>
                        <Col md={5} className="social-login d-flex flex-column justify-content-center align-items-center">
                            <Button variant="outline-light" block><span className="fb"><img src="/assets/images/fb-icon.png" /></span>Innskrá með Facebook</Button>
                            <Button variant="outline-light" block><span className="gm"><img src="/assets/images/gmail-icon.png" /></span>Innskrá með Google</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Login
