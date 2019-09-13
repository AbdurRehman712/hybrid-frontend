import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './CustomButton.css';
class CustomButton extends Component {

    render() {
        return (
            <Button className={this.props.className} href={this.props.href}>
                {this.props.title}
            </Button>
        )
    }
}

export default CustomButton;
