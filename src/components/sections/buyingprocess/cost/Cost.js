import React, { Component } from 'react';
import { Container, Row, Col, Table} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import './Cost.css';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 601 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 600 })
    return isMobile ? children : null
}

class Cost extends Component {
    render() {
        return (
            <section className="cost">
                <Container>
                    <Row className="mb-5">
                        <Col md={12}>
                            <h2 class="mb-4 title">Verð og flutningstími</h2>
                            <p>Enginn falinn kostnaður, tilboðið okkar stendur.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Desktop>
                                <Table responsive>
                                    <thead className="txt-white">
                                        <tr>
                                            <th className="bg-blue">
                                                <h3 className="m-0">Innflutningsgjöld</h3>
                                            </th>
                                            <th className="bg-blue ">
                                                <p className="m-0">Ávallt innifalið í tilboði</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="content">
                                            <td>
                                                <ul className="item">
                                                    <li><h4>Forskráningargjald</h4></li>
                                                    <li><h4>Þjónustugjald</h4></li>
                                                    <li><h4>Umsýslugjald</h4></li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul className="price">
                                                    <li><h4>5.200 kr</h4></li>
                                                    <li><h4>9.990 kr</h4></li>
                                                    <li><h4>239.990 kr</h4></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="total">
                                            <td className="item"><h4>Samtals</h4></td>
                                            <td className="price"><h4>255.180 kr</h4></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Desktop>
                            <Mobile>
                            <Table responsive className="mobile">
                                    <thead className="txt-white">
                                        <tr>
                                            <th className="bg-blue">
                                                <h3 className="m-0">Innflutningsgjöld</h3>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="content">
                                            <td>
                                                <ul className="item">
                                                    <li><h4>Forskráningargjald</h4></li>
                                                    <h4 className="txt-blue">5.200 kr</h4>
                                                    <li><h4>Þjónustugjald</h4></li>
                                                    <h4 className="txt-blue">9.990 kr</h4>
                                                    <li><h4>Umsýslugjald</h4></li>
                                                    <h4 className="txt-blue">239.990 kr</h4>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="total">
                                            <td><h4 className="item">Samtals</h4><h4 className="price">255.180 kr</h4></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Mobile>
                        </Col>
                        <Col md={4} className="p-4 other-content">
                            <h3 className="mb-4 pb-2">Afgreiðslutími</h3>
                            <div>
                                <div>
                                    <h3>Evrópa</h3>
                                    <h3 className="mb-4 pb-2">5-8 vikur</h3>
                                </div>
                                <div>
                                    <h3>Bandaríkin</h3>
                                    <h3 className="mb-4">7-12 vikur</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Cost
