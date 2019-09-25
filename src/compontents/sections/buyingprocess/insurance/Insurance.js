import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Insurance.css';

class Insurance extends Component {
    render() {
        return (
            <section className="insurance">
                <Container>
                    <Row className="mb-5">
                        <Col md={12}>
                            <h2 class="mb-3 title">Tryggingar</h2>
                            <p>Allur farmur er tryggður í flutningi hjá Eimskip með tryggingu frá Verði. Bíllinn er tryggður frá því að Eimskip tekur við bílnum hjá erlendu bílasölunni og þangað til Eimskip afhendir bílinn. Verð tryggingar bætist við flutningskostnaðurinn hjá Eimskip. Hér má sjá upplýsingar um trygginguna ásamt skilmálum hennar: Upplýsingar um farmtryggingu Eimskips.
                            <br /> <br />
                                Skv. íslenskum lögum þá þarf kaupandi bíls að ábyrgðartryggja bíl sinn hjá íslensku tryggingafélagi og það þarf það að gerast áður en farið er með bílinn í nýskráningu og skoðun. Við sjáum um fyrir þig þegar þú hefur valið þitt tryggingarfélag.</p>
                        </Col>
                    </Row>
                    <Row className="insurance-logos mb-5">
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/insurance/sjova-logo.png" alt="sjova-logo" />
                                <h3>Sjóvá</h3>
                                <p>Fá tilboð</p>
                            </div>
                        </Col>
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/insurance/tm-logo.png" alt="tm-logo" />
                                <h3>Trygginamiðstöðin</h3>
                                <p>Fá tilboð</p>
                            </div>
                        </Col>
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/insurance/vis-logo.png" alt="vis-logo" />
                                <h3>Vís</h3>
                                <p>Fá tilboð</p>
                            </div>
                        </Col>
                        <Col md="3" className="logo">
                            <div className="content bg-white d-flex flex-column justify-content-end align-items-center">
                                <img src="/assets/images/insurance/vorfourpage.png" alt="vorfourpage-logo" />
                                <h3>Vörður</h3>
                                <p>Fá tilboð</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Insurance
