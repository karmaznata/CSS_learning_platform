import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";
import ToggleSwitch from '../toggleSwitch/toggleSwitch.js';
import adessoLogo from "../Assets/Adesso_AG_logo.svg.png";
import Button from 'react-bootstrap/Button';
import TutorialMenu from "../TutorialMenu/TutorialMenu.jsx";

const Navbar = () => {
    const [menu, setMenu] = useState("homePage");

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={adessoLogo} alt="company logo" />
            </div>
            <ul className="nav-menu nav nav-underline">
                <li className="nav-item" onClick={() => { setMenu("homePage") }} >
                    <Link to='/' className={`nav-link ${menu === "homePage" ? "active" : ""}`}>Home Page</Link>
                </li>
                <div className="tutorial-menu-dropdown"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                    role="button"
                >
                    <li className="nav-item" onClick={() => { setMenu("tutorial") }} >
                        <Link to='/tutorial' className={`nav-link ${menu === "tutorial" ? "active" : ""}`} >Tutorials</Link>
                    </li>
                    {isDropdownVisible && <TutorialMenu setMenu={setMenu}/>}
                </div>
            </ul>
            <div className="nav-theme-login">
                <div className="theme-toggle">
                    <FaSun className="react-icon" /><ToggleSwitch /><FaMoon className="react-icon" />
                </div>
                <div className="nav-login">
                    {localStorage.getItem('auth-token')
                    ? <Link to='/account'><Button variant="primary" onClick={() => {setMenu("userAccount")}}>Hi,{localStorage.getItem('username')}</Button></Link>
                    :<Link to='/login'><Button variant="primary" onClick={() => {setMenu("login")}}>Login</Button></Link>       
                }
                </div>
            </div>
        </div>
    );
}

export default Navbar;