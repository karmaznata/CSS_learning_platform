import React, { createContext } from "react";
import all_quiz_tasks from "../Components/Assets/all_quiz_tasks.js";

export const QuizContext = createContext(null);

const QuizContextProvider = (props) =>{
    
    const contextValue ={all_quiz_tasks};

    return(
        <QuizContext.Provider value={contextValue}>
            {props.children}
        </QuizContext.Provider>
    )
}
export default QuizContextProvider;