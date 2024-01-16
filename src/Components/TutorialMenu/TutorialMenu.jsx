import React from "react";
import "./TutorialMenu.css";
import { Link } from "react-router-dom";

const TutorialMenu = ({ setMenu }) => {

    return (
        <div className="tutorial-dropdown-menu">
            <ul className="nav-menu-dropdown">
                <li className="nav-item" >
                    <Link to='/tutorial/flexbox' className="nav-link-tutorial" onClick={() => setMenu("tutorial")}>Flexbox</Link>
                </li>
                <li className="nav-item" >
                    <Link to='/tutorial/grid' className="nav-link-tutorial" onClick={() => setMenu("tutorial")}>Grid</Link>
                </li>
                <li className="nav-item">
                    <Link to='/tutorial/subgrid' className="nav-link-tutorial" onClick={() => setMenu("tutorial")}>CSS Grid Subgrid</Link>
                </li>
                <li className="nav-item">
                    <Link to='/tutorial/multi-column-layout' className="nav-link-tutorial" onClick={() => setMenu("tutorial")}>Multi-column Layout</Link>
                </li>
                <li className="nav-item">
                    <Link to='/tutorial/container-queries' className="nav-link-tutorial" onClick={() => setMenu("tutorial")}>Container Queries</Link>
                </li>
            </ul>
        </div>
    );
};

export default TutorialMenu;