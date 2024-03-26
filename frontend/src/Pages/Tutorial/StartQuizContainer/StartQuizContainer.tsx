import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./StartQuizContainer.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const StartQuizContainer = ({ quizTheme }) => {

    const isLoggedIn = localStorage.getItem('login');
    const navigate = useNavigate();

    const openQuiz = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/quiz/${quizTheme}`,{ withCredentials: true });
            console.log(response.data);
            if (response.data.success) {
                navigate(`/quiz/${quizTheme}`)
            }else{
                navigate(`/login`)
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="start-quiz-conatiner">
                <div className="start-quiz-text">
                    <h1 className="display-4 text-uppercase">Check your knowlage!</h1>
                    <p className="fs-4 fw-light">We hope you see how it works. Let's see how well you understand the topic!</p>
                </div>
                <div className="start-quiz-button">
                    <Button onClick={openQuiz}>Start A Quiz: {quizTheme}</Button>
                </div>
            </div>
        </div>
    );
}

export default StartQuizContainer;