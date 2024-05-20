import React, { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { QuizTask } from "../Models/QuizTask";
import {API_URL} from './../apiConnection.js';

export const QuizContext = createContext<QuizTask[]>([]);

interface QuizContextProviderProps {
    children: ReactNode;
}

const QuizContextProvider: React.FC<QuizContextProviderProps> = (props) => {
    const [quizTasks, setQuizTasks] = useState<QuizTask[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/quizzes`, { withCredentials: true });
                setQuizTasks(response.data);
            } catch (error) {
                console.error("Error fetching quizzes:", error);
            }
        };
        fetchData();

    }, []);

    return (
        <QuizContext.Provider value={quizTasks}>
            {props.children}
        </QuizContext.Provider>
    );
};
export default QuizContextProvider;