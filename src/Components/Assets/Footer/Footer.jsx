import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <span className="contact-form">Contact us: email@adesso.de</span>
                <div className="footer-links">
                    <a href="#">Terms</a>
                    <a href="#">Data privacy</a>
                </div>
            </div>

        </div>
    );
}

export default Footer;