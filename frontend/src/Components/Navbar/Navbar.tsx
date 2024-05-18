import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";
import ToggleSwitch from '../toggleSwitch/toggleSwitch.js';
import adessoLogo from "../Assets/Adesso_AG_logo.svg.png";
import Button from 'react-bootstrap/Button';
import { EventRegister } from 'react-native-event-listeners';
import { User } from "../../Models/User.js";


interface NavbarProps {
    isLoggedIn: boolean;
    user: User;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, user }) => {

    const [menu, setMenu] = useState("");
    const [showUsername, setShowUsername] = useState("");

    // Load active menu tab from localStorage on component mount
    useEffect(() => {
        const activeMenu = localStorage.getItem('activeMenu');
        setMenu(activeMenu || "homePage");
    }, []);

    useEffect(() => {
        if(user){
            const username = user.username;
            setShowUsername(username);
        }
    }, [user])

    useEffect(() => {
        const handleMenuUpdate = data => setMenu(data);
        EventRegister.addEventListener("setMenuActive", handleMenuUpdate);
        return () => {
            //@ts-ignore
            EventRegister.removeEventListener("setMenuActive", handleMenuUpdate);
        };
    }, []);

    useEffect(() => {
        const handleUsernameUpdate = data => setShowUsername(data);
        EventRegister.addEventListener("setUsernameUpdate", handleUsernameUpdate);
        return () => {
            //@ts-ignore
            EventRegister.removeEventListener("setUsernameUpdate", handleUsernameUpdate);
        };
    }, []);

    // Update active menu tab in state and localStorage
    const handleMenuClick = (menuName) => {
        localStorage.setItem('activeMenu', menuName);
        setMenu(menuName);
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={adessoLogo} alt="company logo" />
            </div>
            <ul className="nav-menu nav nav-underline fs-6">
                <li className="nav-item" role="button" onClick={() => { handleMenuClick("homePage") }} onKeyDown={() => { }}>
                    <Link to='/' className={`nav-link ${menu === "homePage" ? "active" : ""}`}>Home Page</Link>
                </li>
                <li className="nav-item" role="button" onClick={() => { handleMenuClick("tutorials") }} onKeyDown={() => { }}>
                    <Link to='/tutorials' className={`nav-link ${menu === "tutorials" ? "active" : ""}`} >Tutorials</Link>
                </li>
            </ul>
            <div className="nav-theme-login">
                {/* <div className="theme-toggle">
                    <FaSun className="react-icon fs-5" /><ToggleSwitch /><FaMoon className="react-icon" />
                </div> */}
                <div className="nav-login">
                    {isLoggedIn ?
                        <Link to='/account'><Button className="nav-button" onClick={() => { handleMenuClick("userAccount") }}>Hi, {showUsername}</Button></Link>
                        :
                        <Link to='/login'><Button className="nav-button" onClick={() => { handleMenuClick("login") }}>Login</Button></Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;