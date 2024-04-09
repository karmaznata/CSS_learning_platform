import React, { useEffect } from "react";
import StartView from "../Components/StartView/StartView";
import "../Components/StartView/StartView.css"
import axios from "axios";

const HomePage = () => {

    return ( 
        <div className="home-page">
            <StartView />
        </div> 
    );
}
 
export default HomePage;