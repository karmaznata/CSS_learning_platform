import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import QuizContent from "../../../Components/QuizContent/QuizContent";
import "./MultiColumn.css";

const MultiColumn = (props) => {

    return (
        <div>
            <div>
            {localStorage.getItem('auth-token')
                    ?<Link to={`/quiz/${props.quizTheme}`}><Button>Start A Quiz: <QuizContent quizTheme={`${props.quizTheme}`}/></Button></Link>
                    :<Link to='/login'><Button>Start A Quiz</Button></Link>       
                }
            </div>
        </div>
    );
}

export default MultiColumn;