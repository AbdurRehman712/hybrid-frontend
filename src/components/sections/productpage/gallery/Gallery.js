import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css';

class Gallery extends Component {
    render() {
        return (
            <section className="gallery">
                <Container>
                    <Row>
                        <Col md="6">
                            <div>
                                <img src="assets/images/cars/car1.png" alt="car" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <img src="assets/images/cars/car2.png" alt="car" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <img src="assets/images/cars/car3.png" alt="car" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <img src="assets/images/cars/car4.png" alt="car" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <img src="assets/images/cars/car5.png" alt="car" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <img src="assets/images/cars/car6.png" alt="car" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Gallery
