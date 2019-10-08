import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lightbox from 'fslightbox-react'; 

import './Gallery.css';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
            slide: 0,
        }
    }

    showSlide = (slide) => {
        this.setState({
          isVisible: !this.state.isVisible,
          slide: slide
        });
    }

    render() {
        return (
            <section className="gallery">
                <Lightbox
                    toggler={this.state.isVisible}
                    slide={this.state.slide}
                    sources={[
                        'assets/images/cars/car1.png',
                        'assets/images/cars/car2.png',
                        'assets/images/cars/car3.png',
                        'assets/images/cars/car4.png',
                        'assets/images/cars/car5.png',
                        'assets/images/cars/car6.png'
                    ]}
                />
                <Container>
                    <Row>
                        <Col md="6">
                            <div>
                                <img 
                                onClick={() => this.showSlide(1)}
                                src="assets/images/cars/car1.png" alt="car" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <img 
                                onClick={() => this.showSlide(2)}
                                src="assets/images/cars/car2.png" alt="car" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <img 
                                onClick={() => this.showSlide(3)}
                                src="assets/images/cars/car3.png" alt="car" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <img 
                                onClick={() => this.showSlide(4)}
                                src="assets/images/cars/car4.png" alt="car" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <img 
                                onClick={() => this.showSlide(5)}
                                src="assets/images/cars/car5.png" alt="car" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div>
                                <img 
                                onClick={() => this.showSlide(6)}
                                src="assets/images/cars/car6.png" alt="car" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Gallery
