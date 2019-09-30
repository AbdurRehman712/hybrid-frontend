import React, { Component } from 'react';
import { Container, Row, Col, Form, OverlayTrigger, Popover} from 'react-bootstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValuePre: 0,
            sliderValueMonth: 0,
        }
    }

    handleValuePre = (sliderValuePre) => {
        this.setState({ sliderValuePre });
    }

    handleValueMonth = (sliderValueMonth) => {
        this.setState({ sliderValueMonth });
    }
    render() {
        const { sliderValuePre, sliderValueMonth } = this.state;
        return (
            <section className="filter">
                <Container>
                    <Row>
                        <Col md={12} className="d-flex justify-content-between flex-wrap align-items-center">
                            <Form.Control as="select" className="mr-3">
                                <option>Aston Martin</option>
                                <option>Audi</option>
                                <option>Mercedes Benz</option>
                                <option>Volkswagen</option>
                                <option>Yamaha</option>
                            </Form.Control>
                            <Form.Control as="select" className="mr-3">
                                <option>C-Class</option>
                                <option>...</option>
                            </Form.Control>
                            <div className="filter-item">
                                Gearbox
                            </div>
                            <div className="filter-item">
                                Fuel
                            </div>
                            <div className="filter-item">
                                Mileage
                            </div>
                            <div className="filter-item">
                                Year
                            </div>
                            <div className="filter-item second-last custom">
                                <img alt="setting" src="data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCR0SLATSmfYWAAAB4UlEQVQ4y43TTUvUURQG8N80g9Z3CGRANyHVQsTURVhfQVv0gkQvi8psJwlpvmRQKvSChFCgIAZBtc+knSNBCzfZUJiQkC6CLJyBYW6bvzP/UZGexYV7znPOczj3uexGgzVB8E3t7uSBPQqu+qVDh6QL9sE5D9SBBc/AK29BvSc6d9JvC1ZsGpIRXAY9goyHtiwr6o3TLwm6VRtVMKtNIhq3zYy8ASldinGVWUsRqXrXqCmQ9NnzcrBFwa0YKSktLRmL3JF3PN5nwp9oY9UGbQiCDQORYsqW8UrhRS8j+rycIc2aDcubj0pmfNym1hrwRnAaDMppLLVplHcXnBS8N66er354rdcBJG0YrlC+Z0MSCTdMyVolOFtKpwXNFQUtgnTpdkaotEYgWu/OaAxrlky4KIGkdSMV2fvWo5Fumpa1QoNJi4JToF9eU4neJK8PtAneGXNkO5UxC6rMyRvRqtWIvDlVkRcylYMNKjgUlfRbFwQ/9UX0lJzROL3OpkcV1qhRU2GNPjnHytfHVh20N1LR+cUk2z9uwWFXJFz3O2bvhDaz/uqXck2tD/E+PYo+KZiwKOgGXYKMUTnLinp2Snd64QSYMw2mzIGjnjpvH4zLatcua8x/od6qIPhefqYy/gEZrpbzLj+sTwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wOS0yOVQxODo0NDowNCswMDowMIln2zsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDktMjlUMTg6NDQ6MDQrMDA6MDD4OmOHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" />
                                More
                            </div>
                            <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    overlay={
                                        <Popover id="popover-positioned-bottom">
                                            <Popover.Content>
                                                <div className="cal-div mb-2 d-flex justify-content-between">
                                                    <span>
                                                        Financing
                                                    </span>
                                                    <span>
                                                        {sliderValuePre} %
                                                    </span>
                                                </div>
                                                <Slider 
                                                    defaultValue={sliderValuePre}
                                                    onChange={this.handleValuePre}
                                                    className="mb-4"
                                                />
                                                <div className="cal-div mb-2 d-flex justify-content-between">
                                                    <span>
                                                        Loan term
                                                    </span>
                                                    <span>
                                                        {sliderValueMonth} months
                                                    </span>
                                                </div>
                                                <Slider 
                                                    defaultValue={sliderValueMonth}
                                                    onChange={this.handleValueMonth}
                                                />
                                            </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                    <div className="filter-item custom last bg-blue txt-white">
                                        <img alt="calculate" src="data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCR0SJir0oBNTAAABIklEQVQ4y72UvUpDQRCFv4liLGy8aKHGIiByC8Ei2AUR0tgKFhZRsFAhIOhbiJVPIIIIYuMTWAg2WhlIKQQkaKWtP7kyFtl7GXFjso2z1QznzJwzu6zoOw/8jgh49dRn0IanjNa05q03cgSGIeikbgQRmGKpN2Ew7c4EMWNaIpG6mTqfIniWJ0OgQplxZtkm0X35dPAhdhhwiBtOne+s24Ieh22pTTvItNyzG7YlUu1/bynyql0E9eGj4Jv+t7ekRd0D0Dnd6mW6E4+U9IATzqgaAXmuGHbJhRwagnzpJpdcUxHjST4od5sAMUXuWMUQNMc6eZfU5dZ6KHDOGivEHS+Zw9HsjPyc8MKytECrTBtJCUddJMkbLQdp9rXW/kNCv5lvH+Fb5M8+kX0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDktMjlUMTg6Mzg6NDIrMDA6MDBd+hX2AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA5LTI5VDE4OjM4OjQyKzAwOjAwLKetSgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" />
                                        Calculate loan
                                    </div>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Filter
