import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Button from '../../utilitiesComponent/button/CustomButton';
import { NavLink } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand as={NavLink} to="/"><img src="/assets/images/hybrid-logo.png" alt="Hybrid Logo" /> <span> hybrid.is </span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link activeClassName="active" as={NavLink} to="/">Bílar á skrá</Nav.Link>
                            <Nav.Link activeClassName="active" href="">Bílaleit</Nav.Link>
                            <Nav.Link activeClassName="active" as={NavLink} to="/buying-process">Kaupferlið</Nav.Link>
                            <Nav.Link activeClassName="active" as={NavLink} to="/contact">Hafa samband</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className="borderleft">
                                <Button className="bgprimary border90" as={NavLink} to="/login" title="Nýskráning" />
                                <Button className="bgprimary-outline border90" as={NavLink} to="/login" title="Innskráning" />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default Header;
