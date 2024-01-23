import React, { useContext } from "react";
import "./CSS/All_Tutorials.css"
import TutorialsSearchView from "../Components/TutorialsSearchView/TutorialsSearchView";
import { QuizContext } from "../Context/QuizContext";

const All_Tutorials = () => {
    // const {all_products} = useContext(QuizContext);
    return (
        <div className="tutorial-page-container">
            <TutorialsSearchView />
        </div>
    );
}

export default All_Tutorials;