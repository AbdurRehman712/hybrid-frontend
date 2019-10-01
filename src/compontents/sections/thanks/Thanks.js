import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../../utilitiesComponent/button/CustomButton';
import './thanks.css'
class Thanks extends Component {
    render() {
        return (
            <section className="thanks">
                <Container>
                    <Row className="justify-content-center flex-column align-items-center">
                        <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                            <img className="mb-4" src="assets/images/thanks-tick.png" alt="thanks" />
                            <h1 className="mb-4 text-center">Thanks for submitting!</h1>
                            <p className="mb-5 text-center">Við munum fara í málið eins og skot. Þú getur fylgst með málinu hér inn á síðunni, þú munt einnig fá tilkynningu í tölvupósti</p>
                        </Col>
                        <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                            <p>Málsnr. <br /> #01923</p>
                            <Button className="bgprimary border90" as={Link} to="/view-request" title="Skoða beiðni" />
                            <Link to="/" className="gohome">
                                <span className="mr-2"> 
                                    <img src="assets/images/left-arrow.png" alt="Home" />
                                </span> Aftur á <br />forsíðu</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Thanks
