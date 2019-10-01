import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

import './Product.css';

class Product extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            arrow: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <section className="product">
                <Row>
                    <Col md={this.props.listLayout === true ? 5: 12} className="pro-image-container">
                        <Slider {...settings}>
                            <div className="pro-image">
                                <img src="/assets/images/mercedes.png" alt="car slider" />
                            </div>
                            <div className="pro-image">
                                <img src="/assets/images/mercedes.png" alt="car slider" />
                            </div>
                        </Slider>
                    </Col>
                    <Col md={this.props.listLayout === true ? 7: 12}>
                        <div className="pro-details">
                            <h2>Mercedes benz C 350 E</h2>
                            <div className="pro-content">
                                <div className="features-list mb-md-3 mb-lg-5">
                                    <span>
                                        <span className="icon"><img src="/assets/images/register-icon.png" alt="register-icon" /></span>
                                        <span className="title">5/2016</span>
                                    </span>
                                    <span>
                                        <span className="icon"><img src="/assets/images/division-icon.png" alt="division-icon" /></span>
                                        <span className="title">Sjálfskipting</span>
                                    </span>
                                    <span>
                                        <span className="icon"><img src="/assets/images/fuel-icon.png" alt="fuel-icon" /></span>
                                        <span className="title">Bensín/Rafmagn</span>
                                    </span>
                                    <span>
                                        <span className="icon"><img src="/assets/images/driving-icon.png" alt="driving-icon" /></span>
                                        <span className="title">50.000 km</span>
                                    </span>
                                    <span>
                                        <span className="icon"><img src="/assets/images/power-icon.png" alt="power-icon" /></span>
                                        <span className="title">204 hestöfl</span>
                                    </span>
                                    <span>
                                        <span className="icon"><img src="/assets/images/spending-icon.png" alt="spending-icon" /></span>
                                        <span className="title">4.0 l / 100 km</span>
                                    </span>
                                </div>
                                <div className="pro-price d-flex justify-content-start">
                                    <div className="flex-1">
                                        <span>Staðgreitt</span>
                                        <h3>4.560.000 kr.</h3>
                                    </div>
                                    <div className="flex-2">
                                        <span>Lán (80%)</span><span>36 mán</span>
                                        <h3>55.000 kr. / mánuði</h3>
                                        <span>1.204.000 kr innborgun</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default Product
