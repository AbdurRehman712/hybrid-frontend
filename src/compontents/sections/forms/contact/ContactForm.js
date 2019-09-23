import React, { Component } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import './contact-form.css'

class ContactForm extends Component {
    render() {
        return (
            <section className="form">
                <Form className="mb-5">
                    <Form.Row className="info">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Control type="text" required  />
                            <Form.Label>Fullt nafn</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="email" required  />
                            <Form.Label>Netfang</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="info">
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Control type="text" required />
                            <Form.Label>Símanúmer</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select">
                                <option>Erindi</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridMsg">
                            <Form.Control as="textarea" rows="6" required />
                            <Form.Label>Símanúmer</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSend" className="text-right">
                            <Button variant="primary" type="submit" className="bg-blue">
                                Senda inn beiðni
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </section>
        )
    }
}

export default ContactForm
