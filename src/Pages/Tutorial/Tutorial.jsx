import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Flexbox from "./Flexbox";

const Tutorial = ({ setSelectedTutorial }) => {

    // const [selectedTutorial, setSelectedTutorial] = useState('');

    const { tutorialId } = useParams();


    let selectedComponent;

    switch (setSelectedTutorial) {
        case "flexbox":
            selectedComponent = <Flexbox />;
            break;
        case "flexboxTU":
            selectedComponent = <Flexbox />;
            break;
        default:
            // Handle the default case, or set to null if you don't want to render anything
            selectedComponent = null;
    }

    return <div>{selectedComponent}</div>;
}

export default Tutorial;