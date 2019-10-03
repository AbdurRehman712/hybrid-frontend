import React, { Component } from 'react';
import Button from '../../utilitiesComponent/button/CustomButton';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
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
            <Container>
                <section className="product">
                    <Row>
                        <Col md={this.props.listLayout === true ? 5: 12} className="pro-image-container"> 
                            <Link to="/product-page"> 
                                <Slider {...settings}>
                                    <div className="pro-image">
                                        <img src="/assets/images/mercedes.png" alt="car slider" />
                                    </div>
                                    <div className="pro-image">
                                        <img src="/assets/images/mercedes.png" alt="car slider" />
                                    </div>
                                </Slider>
                            </Link>
                        </Col>
                        <Col md={this.props.listLayout === true ? 7: 12}>
                            <div className="pro-details">
                                <h2>Mercedes benz C 350 E</h2>
                                {
                                    this.props.carBooking && this.props.carBooking === true ? 
                                    <div>
                                        <h3 className="pro-price-top">5.490.000 kr <span className="txt-blue ml-2">sundurliðun</span></h3>
                                        <div className="car-info">
                                            <span className="mr-4">Litur: 
                                                <span className="ml-2"> Dökk blár </span> 
                                                <span className="ml-2" style={{backgroundColor: "#1c3985", borderRadius: "50px", width: "18px", height: "18px", display: "inline-block"}}>
                                                </span>
                                            </span>
                                            <span>Tegund: 
                                                <span className="ml-2">Mercedes Benz</span>
                                                <span className="ml-2"><img src="assets/images/mercedes-icon.png" alt="brand-logo" /></span>
                                            </span>
                                        </div>
                                    </div> : ""
                                    
                                }
                                <div className="pro-content">
                                    <div className="features-list mb-md-3 mb-lg-5">
                                        <span>
                                            <span className="icon">
                                                <img src="/assets/images/register-icon.png" alt="register-icon" />
                                                 {
                                                    this.props.carBooking && this.props.carBooking === true ? 
                                                    <span className="ml-2">Nýskráning:</span>
                                                    : ""
                                                 } 
                                            </span>
                                            <span className="title">5/2016</span>
                                        </span>
                                        <span>
                                            <span className="icon">
                                                <img src="/assets/images/division-icon.png" alt="division-icon" />
                                                 {
                                                    this.props.carBooking && this.props.carBooking === true ? 
                                                    <span className="ml-2">Skipting:</span>
                                                    : ""
                                                 } 
                                            </span>
                                            <span className="title">Sjálfskipting</span>
                                        </span>
                                        <span>
                                            <span className="icon">
                                                <img src="/assets/images/fuel-icon.png" alt="fuel-icon" />
                                                 {
                                                    this.props.carBooking && this.props.carBooking === true ? 
                                                    <span className="ml-2">Eldsneyti:</span>
                                                    : ""
                                                 } 
                                            </span>
                                            <span className="title">Bensín/Rafmagn</span>
                                        </span>
                                        <span>
                                            <span className="icon">
                                                <img src="/assets/images/driving-icon.png" alt="driving-icon" />
                                                 {
                                                    this.props.carBooking && this.props.carBooking === true ? 
                                                    <span className="ml-2">Akstur:</span>
                                                    : ""
                                                 } 
                                            </span>
                                            <span className="title">50.000 km</span>
                                        </span>
                                        <span>
                                            <span className="icon">
                                                <img src="/assets/images/power-icon.png" alt="power-icon" />
                                                 {
                                                    this.props.carBooking && this.props.carBooking === true ? 
                                                    <span className="ml-2">Kraftur:</span>
                                                    : ""
                                                 } 
                                            </span>
                                            <span className="title">204 hestöfl</span>
                                        </span>
                                        <span>
                                            <span className="icon">
                                                <img src="/assets/images/spending-icon.png" alt="spending-icon" />
                                                 {
                                                    this.props.carBooking && this.props.carBooking === true ? 
                                                    <span className="ml-2">Eyðsla:</span>
                                                    : ""
                                                 } 
                                            </span>
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
                                    {
                                        this.props.carBooking && this.props.carBooking === true ? 
                                        <div className="enquiry-container">
                                            <Button className="bgprimary border90" as={Link} to="/enquiry-form" title="Senda fyrirspurn um bíl" />
                                            <div className="enquiry-with d-inline-flex flex-row justify-content-center align-items-center">
                                                <span className="line"></span>
                                                <span className="or">EDA</span>
                                                <span className="line"></span>
                                            </div>
                                            <div className="calculate">
                                                <a href="#a" >
                                                    <span>
                                                        <span class="mr-3"><img src="assets/images/calculator-icon.png" alt="calculate"/></span>
                                                        Reikna út lán
                                                    </span>
                                                </a>
                                            </div>
                                        </div> : "" 
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        )
    }
}

export default Product
