import React, { Component } from 'react';
import Contact from '../sections/contact/contact/Contact';
import FAQ from '../sections/contact/faq/FAQ';

class ContactPage extends Component {    
    render() {
        return (
            <div>
                <Contact />
                <FAQ />
            </div>
        )
    }
}

export default ContactPage;
