import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Funding.css';

class Funding extends Component {
    render() {
        return (
            <section className="funding">
                <Container>
                    <Row className="mb-5">
                        <Col md={12}>
                            <h2 class="mb-4 title">Fjármögnunarleiðir</h2>
                            <p>Allt að 100% fjármögnun í boði!</p>
                        </Col>
                    </Row>
                    <Row className="fundings-logos">
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/funding/arion-logo.svg" alt="arion-logo" />
                                <h3>Arion banki</h3>
                                <p>8,15%</p>
                            </div>
                        </Col>
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/funding/ergo-logo.svg" alt="ergo-logo" />
                                <h3>Ergo</h3>
                                <p>7,75%</p>
                            </div>
                        </Col>
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/funding/landsbankinn-logo.svg" alt="landsbankinn-logo" />
                                <h3>Landsbankinn</h3>
                                <p>7,75%</p>
                            </div>
                        </Col>
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/funding/lykill-logo.svg" alt="lykill-logo" />
                                <h3>Lykill</h3>
                                <p>7,70%</p>
                            </div>
                        </Col>
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/funding/tm-logo.svg" alt="tm-logo" />
                                <h3>Trygginamiðstöðin</h3>
                                <p>8,25%</p>
                            </div>
                        </Col>
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/funding/netgiro-logo.svg" alt="netgiro-logo" />
                                <h3>Netgíró</h3>
                                <p>Brúarfjármögnun</p>
                            </div>
                        </Col>
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/funding/pei-logo.svg" alt="" />
                                <h3>Pei</h3>
                                <p>Brúarfjármögnun</p>
                            </div>
                        </Col>
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/funding/aur-logo.png" alt="" />
                                <h3>Aur</h3>
                                <p>Brúarfjármögnun</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Funding
