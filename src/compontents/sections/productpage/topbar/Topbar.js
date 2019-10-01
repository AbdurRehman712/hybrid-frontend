import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Topbar.css';

class Topbar extends Component {
    render() {
        return (
            <section className="topbar-product-page">
                <Container>
                    <Row>
                        <Col md={6}>
                            <a href="javascript:history.go(-1)">
                                <span className="goback">
                                    <span className="mr-2"> 
                                        <img src="assets/images/left-arrow.png" alt="back" />
                                    </span> 
                                    Til baka í yfirlit
                                </span>
                            </a>
                        </Col>
                        <Col md={6} className="text-right">
                            <span className="print">
                                <span className="mr-2">
                                    <img src="assets/images/print-icon.png" alt="print" />
                                </span>
                                Prenta
                            </span>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Topbar
