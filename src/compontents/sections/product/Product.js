import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <section className="product d-flex">
                <div className="pro-image">
                    <img src="/assets/images/car-slide.png" alt="car slider" />
                </div>
                <div className="pro-details">
                    <h2>Mercedes benz C 350 E</h2>
                    <div className="pro-content">
                        <div className="features-list" >
                            <span>
                                <span className="icon">i</span>
                                <span className="title">5/2016</span>
                            </span>
                            <span>
                                <span className="icon">i</span>
                                <span className="title">Sjálfskipting</span>
                            </span>
                            <span>
                                <span className="icon">i</span>
                                <span className="title">Bensín/Rafmagn</span>
                            </span>
                        </div>
                        <div className="features-list mb-5">
                            <span>
                                <span className="icon">i</span>
                                <span className="title">50.000 km</span>
                            </span>
                            <span>
                                <span className="icon">i</span>
                                <span className="title">204 hestöfl</span>
                            </span>
                            <span>
                                <span className="icon">i</span>
                                <span className="title">4.0 l / 100 km</span>
                            </span>
                        </div>
                        <div className="pro-price d-flex justify-content-between">
                            <div>
                                <span>Staðgreitt</span>
                                <h3>4.560.000 kr.</h3>
                            </div>
                            <div>
                                <span>Lán (80%)</span><span>36 mán</span>
                                <h3>55.000 kr. / mánuði</h3>
                                <span>1.204.000 kr innborgun</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Product
