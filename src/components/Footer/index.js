import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="b-footer">
                &copy; 2017 All rights reserved. <br/> <a href="mailto:zakovryashin.v@gmail.com" className="b-footer__mailto">zakovryashin.v@gmail.com</a>
            </div>
        );
    }
}

export default Footer;
