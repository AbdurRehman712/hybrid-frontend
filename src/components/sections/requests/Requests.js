import React, { Component } from 'react';
import { Container, Row, Col,Table, Tabs, Tab } from 'react-bootstrap';
import './requests.css';

class Requests extends Component {
    render() {
        return (
            <section className="requests">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>Hæ Sindri</h1>
                            <p className="mb-5">Hér getur þú fylgst með þeim beiðnum sem þú hefur sent inn, biðtíma bifreiðar og aðstoð þjónustufulltrúa </p>
                        </Col>
                        <Col md={12}>
                            <Tabs defaultActiveKey="requests" id="requests-page">
                                <Tab eventKey="requests" title="Beiðnir">
                                    <span className="color-info">
                                        <span className="mr-4">
                                            <span className="stutus-dot green"></span> = Staðfest
                                        </span>
                                        <span>
                                            <span className="stutus-dot red"></span> = Óstaðfest
                                        </span>
                                    </span>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>mynd</th>
                                                <th>bíltegund</th>
                                                <th>Verð</th>
                                                <th>áætlaður afhendingartími</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="item">
                                                <td><img src="assets/images/car-image-small.jpg" alt="car image" /></td>
                                                <td>Mercedes benz C 350 E </td>
                                                <td>5.490.000 kr</td>
                                                <td><span className="stutus-dot green"></span>10.11.2019</td>
                                                <td className="txt-blue">skoða</td>
                                            </tr>
                                            <tr className="item">
                                                <td><img src="assets/images/car-image-small.jpg" alt="car image" /></td>
                                                <td>Mercedes benz C 350 E </td>
                                                <td>5.490.000 kr</td>
                                                <td><span className="stutus-dot red"></span>10.11.2019</td>
                                                <td className="txt-blue">skoða</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="carimport" title="Bílar í innflutningi">
                                    No Result
                                </Tab>
                                <Tab eventKey="purchasehistory" title="Kaupsaga">
                                    No Result
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Requests
