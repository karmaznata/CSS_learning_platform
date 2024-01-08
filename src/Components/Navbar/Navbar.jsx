import React from "react";
import { FaSun, FaMoon} from "react-icons/fa";
import "./Navbar.css";
import ToggleSwitch from '../toggleSwitch/toggleSwitch.js';
import adessoLogo from "../Assets/Adesso_AG_logo.svg.png";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={adessoLogo} alt="company logo" />
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Tutorials</li>
            </ul>
            <div className="nav-theme-login">
                <div className="theme-toggle">
                    <FaSun className="react-icon"/><ToggleSwitch/><FaMoon className="react-icon"/>
                </div>
                <div className="nav-login">
                    <button>Login</button>
                </div>
            </div>
        </div>
      );
}
 
export default 	Navbar;