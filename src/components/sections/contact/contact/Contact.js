import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Contact.css';
import ContactForm from '../../forms/contact/ContactForm';

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <Container>
                    <Row className="formhead">
                        <Col md={12}>
                            <h2 class="title mb-3">Við viljum heyra í þér!</h2>
                            <p>Vinsamlegast fylltu út í alla stjörnumerkta reiti</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="">
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Contact
