import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row className="align-items-center footer-content">
                        <Col md={6} className="footer-logo d-flex align-items-center ">
                            <a  href=""><img src="/assets/images/hybrid-logo.png" alt="Hybrid Logo" /> <span> hybrid.is </span> </a>
                        </Col>
                        <Col>
                            <Row className="footer-details">
                                <Col md={8} className="text-right email">
                                    <img src="/assets/images/email.png" alt="Hybrid Email" /> <span> <a href="mailto:info@hybrid.is"> info@hybrid.is </a> </span> 
                                </Col>
                                <Col md={4} className="text-right cell">
                                    <img src="/assets/images/contact.png" alt="Hybrid Contact" /> <span> <a href="5191919"> 519 1919 </a> </span> 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <section className="footer-bottom">
                    <Container>
                        <Row className="align-items-center bottom-content">
                            <Col md={6}>
                                <Row className="bottom-details">
                                    <Col md={6}>
                                        <img src="/assets/images/questions.png" alt="Hybrid Question" /> <span> <a href="#a"> Spurt og svarað </a> </span> 
                                    </Col>
                                    <Col md={6}>
                                        <img src="/assets/images/conversation.png" alt="Hybrid Conversation" /> <span> <a href="$nb"> Hafa samband </a> </span> 
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className="social d-flex align-items-center justify-content-end">
                                <a href="#"><img src="/assets/images/facebook.png" alt="Hybrid Facebook" /> </a>
                                <a href="#"><img src="/assets/images/instagram.png" alt="Hybrid Facebook" /> </a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </footer>
        )
    }
}

export default Footer
