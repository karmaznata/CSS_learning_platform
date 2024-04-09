import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";
import ToggleSwitch from '../toggleSwitch/toggleSwitch.js';
import adessoLogo from "../Assets/Adesso_AG_logo.svg.png";
import Button from 'react-bootstrap/Button';
import TutorialsMenu from "../TutorialsMenu/TutorialsMenu.js";
import { EventRegister } from "react-native-event-listeners";

const Navbar = (prop) => {

    const {isLoggedIn, username} = prop;

    const [menu, setMenu] = useState("");
    const [showUsername, setShowUsername] = useState();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    useEffect(()=>{
        const activeMenu = localStorage.getItem('activeMenu');
        setMenu(activeMenu);
    },[])
    
    useEffect(()=>{
        setShowUsername(username);
        console.log("!2333", showUsername);
    },[username])

    useEffect(() => {
        const handleMenuUpdate = data => setMenu(data);
        EventRegister.addEventListener("setMenuActive", handleMenuUpdate);
        console.log("setMenuActive", menu);
        return () => {
            //@ts-ignore
            EventRegister.removeEventListener("setMenuActive", handleMenuUpdate);
        };
    }, []);

    useEffect(() => {
        const handleUsernameUpdate = data => setShowUsername(data);

        EventRegister.addEventListener("setUsernameUpdate", handleUsernameUpdate);
        console.log("setUsernameUpdate", showUsername);
        return () => {
            //@ts-ignore
            EventRegister.removeEventListener("setUsernameUpdate", handleUsernameUpdate);
        };
    }, []);


    // Load active menu tab from localStorage on component mount
    useEffect(() => {
        const activeMenu = localStorage.getItem('activeMenu');
        setMenu(activeMenu || "homePage"); // Default value if no active menu is found
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
                <li className="nav-item" onClick={() => {handleMenuClick("homePage") }} >
                    <Link to='/' className={`nav-link ${menu === "homePage" ? "active" : ""}`}>Home Page</Link>
                </li>
                <div className="tutorial-menu-dropdown"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                    role="button"
                >
                    <li className="nav-item" onClick={() => {handleMenuClick("tutorials") }} >
                        <Link to='/tutorials' className={`nav-link ${menu === "tutorials" ? "active" : ""}`} >Tutorials</Link>
                    </li>
                    {/* {isDropdownVisible && <TutorialsMenu handleMenuClick={handleMenuClick}/>} */}
                </div>
            </ul>
            <div className="nav-theme-login">
                {/* <div className="theme-toggle">
                    <FaSun className="react-icon fs-5" /><ToggleSwitch /><FaMoon className="react-icon" />
                </div> */}

                <div className="nav-login">
                    {isLoggedIn ? 
                        <Link to='/account'><Button className="nav-button" onClick={() => {handleMenuClick("userAccount")}}>Hi, {showUsername}</Button></Link>
                        :
                        <Link to='/login'><Button className="nav-button" onClick={() => {handleMenuClick("login")}}>Login</Button></Link>       
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;