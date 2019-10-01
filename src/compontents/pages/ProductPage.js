import React, { Component } from 'react';
import Topbar from '../sections/productpage/topbar/Topbar';
import Product from '../sections/product/Product'
import Features from '../sections/productpage/features/Features';
import Gallery from '../sections/productpage/gallery/Gallery';

class ProductPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            listLayout: true,
            carBooking: true
        }
    }
    render() {
        return (
            <section className="product-page">
                <Topbar />
                <Product listLayout={this.state.listLayout} carBooking={this.state.carBooking} />
                <Features />
                <Gallery />
            </section>
        )
    }
}

export default ProductPage
