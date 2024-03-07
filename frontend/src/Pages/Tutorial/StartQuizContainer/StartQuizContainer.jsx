import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./StartQuizContainer.css";

const StartQuizContainer = ({quizTheme}) => {
    return ( 
        <div> 
            <div className="start-quiz-conatiner">
                <div className="start-quiz-text">
                    <h1 className="display-4 text-uppercase">Check your knowlage!</h1>
                    <p className="fs-4 fw-light">We hope you see how it works. Let's see how well you understand the topic!</p>
                </div>
                <div className="start-quiz-button">
                    {localStorage.getItem('auth-token')
                        ? <Link to={`/quiz/${quizTheme}`}><Button>Start A Quiz: {`${quizTheme}`}</Button></Link>
                        : <Link to='/login'><Button>Start A Quiz: {`${quizTheme}`}</Button></Link>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default StartQuizContainer;