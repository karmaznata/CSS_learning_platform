import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import QuizContent from "../../../Components/QuizContent/QuizContent";
import "./Flexbox.css";
import BaselineIcon from "../../../Components/Assets/baseline-high-dark.png";

const Flexbox = (props) => {

    return (
        <div>
            <div className="intro-header">
                <div className="intro-header-background">
                    <div className="intro-content">
                        <div className="intro-text">
                            <div className="heading-tutorial display-1">Flexbox</div>
                            <div className="paragraph-bigger fs-6 fw-light">This tutorial introduces Flexbox, a technology for positioning elements on a page, its main features, and CSS  syntax. At the end of the topic, you will be able to take a short test to consolidate your skills.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tutorial-content">
                <div className="tutorial-definition-wrap">
                    <div className="tutorial-definition-content">
                        <div className="heading-tutorial-small fs-2">Flexbox is a one-dimensional layout method for positioning elements in rows or columns. </div>
                        <Link to="https://caniuse.com/?search=flexbox">
                            <div className="browser-supporting-container-1">
                                <img className="baseline-icon" src={BaselineIcon} alt="baseline-high-dark" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="method-goals">
                            <h2 className="heading">Flexbox solves the following tasks:</h2>
                        </div>
                        <div className="goals-list-wrapper">
                            <ul>
                                <li className="goals-description fs-5 fw-light">Centering the contents of a container within a parent.</li>
                                <li className="goals-description fs-5 fw-light">Make all child elements of a container occupy the same amount of available width/height, regardless of what width/height is available.</li>
                                <li className="goals-description fs-5 fw-light">Make sure that all columns in a multi-column layout have the same height, even if they contain different amounts of content.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    {localStorage.getItem('auth-token')
                        ? <Link to={`/quiz/${props.quizTheme}`}><Button>Start A Quiz: <QuizContent quizTheme={`${props.quizTheme}`} /></Button></Link>
                        : <Link to='/login'><Button>Start A Quiz</Button></Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default Flexbox;