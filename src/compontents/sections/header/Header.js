import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Button from '../../utilitiesComponent/button/CustomButton';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand href="#"><img src="/assets/images/hybrid-logo.png" alt="Hybrid Logo" /> <span> hybrid.is </span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="active" href="#home">Bílar á skrá</Nav.Link>
                            <Nav.Link href="#link">Bílaleit</Nav.Link>
                            <Nav.Link href="#link">Kaupferlið</Nav.Link>
                            <Nav.Link href="#link">Hafa samband</Nav.Link>
                            <div className="borderleft">
                                <Button className="bgprimary border90" href="#" title="Nýskráning" />
                                <Button className="bgprimary-outline border90" href="#" title="Innskráning" />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default Header;
