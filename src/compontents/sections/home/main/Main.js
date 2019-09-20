import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <section className="main">
                <Container>
                    <Row className="work">
                        <Col md={12}>
                            <h2 class="title mb-3">Hvernig virkar þetta <br /> allt fyrir sig?</h2>
                            <p>Vinsamlegast fylltu út í alla stjörnumerkta reiti</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="steps step1">
                            <div className="step bg-white">
                                <h3>Skoðaðu bílinn eða við finnum hann</h3>
                                <p>Hybrid sérhæfir sig í að aðstoða fólk við að kaupa bíla erlendis og flytja þá til Íslands. Við finnum bíla fyrir fólk og sjáum um að semja um verðið. </p>
                            </div>
                        </Col>
                        <Col md={{span: 6, offset: 6}} className="steps step2">
                            <svg className="line1" xmlns="http://www.w3.org/2000/svg" width="315" height="171" viewBox="0 0 315 171">
                                <path fill="none" fill-rule="evenodd" stroke="#CAE3FF" stroke-dasharray="10" stroke-width="3" d="M1 2.602C209-4.525 313 51.608 313 171"/>
                            </svg>
                            <div className="step bg-white">
                                <h3>Við gefum þér tilboð</h3>
                                <p>Hybrid sérhæfir sig í að aðstoða fólk við að kaupa bíla erlendis og flytja þá til Íslands. Við finnum bíla fyrir fólk og sjáum um að semja um verðið. </p>
                            </div>
                            <svg className="line2" xmlns="http://www.w3.org/2000/svg" width="358" height="93" viewBox="0 0 358 93">
                                <path fill="none" fill-rule="evenodd" stroke="#CAE3FF" stroke-dasharray="10" stroke-width="3" d="M1.31 91.371C176.105-21.986 294.305-27.398 355.912 75.134"/>
                            </svg>
                        </Col>
                        <Col md={6} className="steps step3">
                            <div className="step bg-white">
                                <h3>Við flytjum bílinn inn</h3>
                                <p>Hybrid sérhæfir sig í að aðstoða fólk við að kaupa bíla erlendis og flytja þá til Íslands. Við finnum bíla fyrir fólk og sjáum um að semja um verðið. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Main
