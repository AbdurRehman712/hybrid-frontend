import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Collapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import './FAQ.css';

var Panel = Collapse.Panel;

class FAQ extends Component {
    render() {
        return (
            <section className="faq">
                <Container>
                    <Row>
                        <Col md={12} className="mb-3">
                            <h2 class="title mb-3">Algengar spurningar</h2>
                            <p>Vinsamlegast fylltu út í alla stjörnumerkta reiti</p>
                        </Col>
                        <Col md={12}>
                            <Collapse defaultActiveKey={"0"} accordion={true} className="faq-items">
                                <Panel key={1} isActive={false} header="Hver er biðtímiinn á að fá bíl?" headerClass="title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus arcu, blandit at dolor vehicula, ultricies vulputate arcu. Praesent tempus, elit at placerat placerat, ligula ex mollis erat, at aliquet dui nisi sed quam.</p>
                                </Panel>
                                <Panel key={2} isActive={false} header="Hver er biðtímiinn á að fá bíl?" headerClass="title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus arcu, blandit at dolor vehicula, ultricies vulputate arcu. Praesent tempus, elit at placerat placerat, ligula ex mollis erat, at aliquet dui nisi sed quam.</p>
                                </Panel>
                                <Panel key={3} isActive={false} header="Hver er biðtímiinn á að fá bíl?" headerClass="title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus arcu, blandit at dolor vehicula, ultricies vulputate arcu. Praesent tempus, elit at placerat placerat, ligula ex mollis erat, at aliquet dui nisi sed quam.</p>
                                </Panel>
                                <Panel key={4} isActive={false} header="Hver er biðtímiinn á að fá bíl?" headerClass="title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus arcu, blandit at dolor vehicula, ultricies vulputate arcu. Praesent tempus, elit at placerat placerat, ligula ex mollis erat, at aliquet dui nisi sed quam.</p>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default FAQ
