import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import Flexbox from "./Flexbox/Flexbox";
import Grid from "./Grid/Grid";
import Subgrid from "./Subgrid/Subgrid";
import MultiColumn from "./MultiColumn/MultiColumn";
import ContainerQueries from "./ContainerQueries/ContainerQueries";
import { TutorialContext } from "../../Context/TutorialContext";

const Tutorial = ({selectedTutorial}) => {

    
    const { all_tutorials } = useContext(TutorialContext);
    const [tutorial, setTutorial] = useState('');

    useEffect(()=>{
       all_tutorials.filter((tutorial)=> tutorial.tutorial_theme == selectedTutorial ? setTutorial(tutorial) : null)
    }, [selectedTutorial, all_tutorials]);

    useEffect(() => {   
    }, [tutorial]);

    let selectedComponent;

    switch (selectedTutorial) {
        case "Flexbox":
            selectedComponent = <Flexbox tutorial={tutorial} />;
            break;
        case "Grid":
            selectedComponent = <Grid selectedTutorial={selectedTutorial} />;
            break;
        case "CSS Grid Subgrid":
            selectedComponent = <Subgrid selectedTutorial={selectedTutorial} />;
            break;
        case "Multi-column Layout":
            selectedComponent = <MultiColumn selectedTutorial={selectedTutorial} />;
            break;
        case "Container Queries":
            selectedComponent = <ContainerQueries selectedTutorial={selectedTutorial} />;
            break;
        default:
            selectedComponent = null;
    }

    return <div>{selectedComponent}</div>;
}

export default Tutorial;