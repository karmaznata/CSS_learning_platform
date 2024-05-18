import React, { createContext, ReactNode } from "react";
import all_tutorials from "../Components/Assets/all_tutorials.js";
import { TutorialModel } from "../Models/TutorialModel";


export const TutorialContext = createContext<TutorialModel[]>([]);

interface TutorialContextProviderProps {
    children: ReactNode;
}

const TutorialContextProvider: React.FC<TutorialContextProviderProps> = (props) => {

    const contextValue: TutorialModel[] = all_tutorials;

    return (
        <TutorialContext.Provider value={contextValue}>
            {props.children}
        </TutorialContext.Provider>
    )
}
export default TutorialContextProvider