import React, { useContext } from "react";
import "./CSS/AllTutorials.css"
import TutorialsSearchView from "../Components/TutorialsSearchView/TutorialsSearchView";

const AllTutorials = () => {
    return (
        <div className="tutorial-page-container">
            <TutorialsSearchView />
        </div>
    );
}

export default AllTutorials;