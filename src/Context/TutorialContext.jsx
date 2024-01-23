import React, { createContext } from "react";
import all_tutorials from "../Components/Assets/all_tutorials.js";

export const TutorialContext = createContext(null);

const TutorialContextProvider = (props ) =>{

    const contextValue ={all_tutorials};

    return(
        <TutorialContext.Provider value={contextValue}>
            {props.children}
        </TutorialContext.Provider>
    )
}
export default TutorialContextProvider