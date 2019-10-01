import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './paymentassessment.css';

class PaymentAssessment extends Component {
    render() {
        return (
            <section className="assessment">
                <Container>
                    <Row>
                        <Col md={12} className="mb-5">
                            <h1 class="title">Greiðslumat fyrir bifreið</h1>
                            <p>Ekki með aðgang? <Link to="/" className="txt-blue">Smelltu hér</Link></p>
                        </Col>
                        <Col md={12} className="mb-5 text-center">
                            <Button variant="outline-light"><span className="mr-4 car-assessment-icon"><img src="/assets/images/car-key-payment.png" alt="fb-icon" /></span><span class="mr-4">Innskrá með Íslykli</span></Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default PaymentAssessment
