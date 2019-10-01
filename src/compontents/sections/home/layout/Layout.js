import React, { Component } from 'react';
import { Container, Form} from 'react-bootstrap';
import Product from '../../product/Product'
import './Layout.css';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            listLayout: true,
        }
    }
    render() {
        return (
            <section className={this.state.listLayout === true ? "layout list": "layout grid"}>
                <Container>
                    <div className="d-flex mb-5 layout-btn-container">
                        <div className="btn-layout">
                            <span
                                onClick={
                                    () => {
                                        this.setState({ listLayout: !this.state.listLayout})
                                    }
                                }
                                className={this.state.listLayout === true ? "active": ""}
                            ><img src="/assets/images/list-icon.png" alt="list" /></span>
                            <span
                                onClick={
                                    () => {
                                        this.setState({ listLayout: !this.state.listLayout})
                                    }
                                }
                                className={this.state.listLayout === true ? "": "active"}
                            ><img src="/assets/images/menu-icon.png" alt="list" /></span>
                        </div>
                        <div className="search-box">
                            <Form>
                                <Form.Control type="text" name="search" placeholder="Search string…" />
                                <spna className="search-icon"></spna>
                            </Form>
                        </div>
                    </div>
                    <section className="product-container">
                        <Product listLayout={ this.state.listLayout } />
                    </section>
                </Container>
            </section>
        )
    }
}

export default Layout
