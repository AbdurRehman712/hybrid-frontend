import React, { Component } from 'react';
import { Container, Form} from 'react-bootstrap';
import Product from '../../product/Product'
import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <section className="layout">
                <Container>
                    <div className="d-flex mb-5">
                        <div className="btn-layout">
                            <span className="bg-blue"><img src="/assets/images/list-icon.png" alt="list" /></span>
                            <span><img src="/assets/images/menu-icon.png" alt="list" /></span>
                        </div>
                        <div className="search-box">
                            <Form>
                                <Form.Control type="text" name="search" placeholder="Search string…" />
                                <spna className="search-icon"></spna>
                            </Form>
                        </div>
                    </div>
                    <Product />
                </Container>
            </section>
        )
    }
}

export default Layout
