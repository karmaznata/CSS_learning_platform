import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <span className="contact-form">Contact us: <a href="mailto:ipz20-n.karmazina@it.nubip.edu.ua">ipz20-n.karmazina@it.nubip.edu.ua</a></span>
                <div className="footer-links">
                    <a href="#">Terms</a>
                    <a href="https://github.com/karmaznata/CSS_learning_platform">Github</a>
                </div>
            </div>

        </div>
    );
}

export default Footer;