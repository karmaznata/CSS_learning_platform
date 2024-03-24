import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import Flexbox from "./Flexbox/Flexbox";
import Grid from "./Grid/Grid";
import Subgrid from "./Subgrid/Subgrid";
import MultiColumn from "./MultiColumn/MultiColumn";
import ContainerQueries from "./ContainerQueries/ContainerQueries";
import { TutorialContext } from "../../Context/TutorialContext";
import { TutorialModel } from "../../Models/TutorialModel";


const Tutorial = ({selectedTutorial}) => {

    const all_tutorials = useContext(TutorialContext);
    const [tutorial, setTutorial] = useState<TutorialModel>();

    useEffect(() => {
        const foundTutorial = all_tutorials.find(t => t.tutorial_theme === selectedTutorial);
        if (foundTutorial) {
            setTutorial(foundTutorial);
        }
    }, [selectedTutorial, all_tutorials]);

    let selectedComponent = null; 

    if (tutorial) {
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
    }

    return <div>{selectedComponent}</div>;
};
export default Tutorial;