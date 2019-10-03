import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Button from '../../utilitiesComponent/button/CustomButton';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand as={Link} to="/"><img src="/assets/images/hybrid-logo.png" alt="Hybrid Logo" /> <span> hybrid.is </span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="active" href="#home">Bílar á skrá</Nav.Link>
                            <Nav.Link href="#link">Bílaleit</Nav.Link>
                            <Nav.Link as={Link} to="/buying-process">Kaupferlið</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Hafa samband</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className="borderleft">
                                <Button className="bgprimary border90" as={Link} to="/login" title="Nýskráning" />
                                <Button className="bgprimary-outline border90" as={Link} to="/login" title="Innskráning" />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default Header;
