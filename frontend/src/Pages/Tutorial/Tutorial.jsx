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
        case "flexbox":
            selectedComponent = <Flexbox quizTheme={selectedTutorial} />;
            break;
        case "grid":
            selectedComponent = <Grid quizTheme={selectedTutorial} />;
            break;
        case "subgrid":
            selectedComponent = <Subgrid quizTheme={selectedTutorial} />;
            break;
        case "multi-column":
            selectedComponent = <MultiColumn quizTheme={selectedTutorial} />;
            break;
        case "container-queries":
            selectedComponent = <ContainerQueries quizTheme={selectedTutorial} />;
            break;
        default:
            selectedComponent = null;
    }

    return <div>{selectedComponent}</div>;
}

export default Tutorial;