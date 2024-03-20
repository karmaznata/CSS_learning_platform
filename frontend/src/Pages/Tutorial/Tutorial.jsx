import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Flexbox from "./Flexbox/Flexbox";
import Grid from "./Grid/Grid";
import Subgrid from "./Subgrid/Subgrid";
import MultiColumn from "./MultiColumn/MultiColumn";
import ContainerQueries from "./ContainerQueries/ContainerQueries";

const Tutorial = ({selectedTutorial}) => {

    let selectedComponent;

    switch (selectedTutorial) {
        case "Flexbox":
            selectedComponent = <Flexbox selectedTutorial={selectedTutorial} />;
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