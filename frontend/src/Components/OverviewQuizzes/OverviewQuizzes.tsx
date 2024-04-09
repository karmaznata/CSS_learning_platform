import React, { useState } from "react";
import "./OverviewQuizzes.css";
import { UserScore } from "../../Models/UserScores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface UserScoresProps {
    userScores: UserScore[];
}

const OverviewQuizzes: React.FC<UserScoresProps> = ({ userScores }) => {
    const navigate = useNavigate();
    const [onQuizHover, setOnQuizHover] = useState(null);

    const retakeQuiz = (quizTheme) => {
        navigate(`/quiz/${quizTheme}`);
    };

    const onMouseEnter = (index) => {
        setOnQuizHover(index);
    };

    const onMouseLeave = () => {
        setOnQuizHover(null);
    };

    return (
        <div className="profile-quizzes-container">
            <div className="profile-quizzes-header fs-4">
                <label>Quiz Results</label>
                <hr />
            </div>
            <div className="quizzes-score-containers">
                {userScores.length > 0 ? (
                    Object.entries(userScores).map(([key, value], index) => (
                        <div
                            className="user-taken-quizzes-container"
                            key={key}
                            onMouseEnter={() => onMouseEnter(index)}
                            onMouseLeave={onMouseLeave}
                        >
                            <div className="left-quizz-content">
                                <p className="fs-3 fw-normal">Quiz: {value.quiz_theme}</p>
                                <p className="fs-6 fw-light">Score: <i className={value.points_scored > 65 ? "quiz-passed" : "quiz-failed"}>{value.points_scored}%</i></p>
                            </div>
                            <div className="right-quizz-content">
                                <div className="vl-2"></div>
                                <FontAwesomeIcon className={`retake-quiz-icon ${onQuizHover === index ? 'hovered' : ''}`} onClick={() => retakeQuiz(value.quiz_theme)} icon={faRotateRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-data-container">
                        <div className="no-quizzes-message">
                            <i className="fs-6" style={{ color: "#7f7f7f" }}>You haven't taken any quizzes yet!</i>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OverviewQuizzes;