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
                            <p>Ekki með aðgang? <a href="#">Smelltu hér</a></p>
                            <Form>
                                <Form.Group controlId="formBasicEmail" className="user-input-wrp">
                                    <Form.Control type="email" className="inputText" />
                                    <span class="floating-label">Notandanafn</span>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword" className="user-input-wrp">
                                    <Form.Control type="password" className="inputText" />
                                    <span class="floating-label">Lykilorð</span>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Innskrá
                                </Button>
                            </Form>
                        </Col>
                        <Col md={6}>

                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Login
