import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Features.css';

class Features extends Component {
    render() {
        return (
            <section className="features">
                <Container>
                    <Row className="features-container m-0">
                        <Col md="12" className="mb-2">
                            <h2 className="title">Búnaður</h2>
                        </Col>
                        <Col md="3">
                            <ul className="features-list-items">
                                <li>ABS</li>
                                <li>Adaptive lighting</li>
                                <li>Air suspension</li>
                                <li>Alarm system</li>
                                <li>Alloy wheels</li>
                                <li>Arm rest</li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <ul className="features-list-items">
                                <li>ABS</li>
                                <li>Adaptive lighting</li>
                                <li>Air suspension</li>
                                <li>Alarm system</li>
                                <li>Alloy wheels</li>
                                <li>Arm rest</li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <ul className="features-list-items">
                                <li>ABS</li>
                                <li>Adaptive lighting</li>
                                <li>Air suspension</li>
                                <li>Alarm system</li>
                                <li>Alloy wheels</li>
                                <li>Arm rest</li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <ul className="features-list-items">
                                <li>ABS</li>
                                <li>Adaptive lighting</li>
                                <li>Air suspension</li>
                                <li>Alarm system</li>
                                <li>Alloy wheels</li>
                                <li>Arm rest</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Features
