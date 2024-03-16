import React, { useEffect } from "react";
import StartView from "../Components/StartView/StartView";
import "../Components/StartView/StartView.css"
import axios from "axios";

const HomePage = () => {
    useEffect(()=>{
        axios.get('http://localhost:4000')
        .then(res =>{
            console.log(res)
        })
        .catch(err => console.log(err))
    }, [])
    return ( 
        <div className="home-page">
            <StartView />
        </div> 
    );
}
 
export default HomePage;