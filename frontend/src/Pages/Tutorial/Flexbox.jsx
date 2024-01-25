import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import QuizContent from "../../Components/QuizContent/QuizContent";

const Flexbox = () => {

    return (
        <div>
            <div>
            {localStorage.getItem('auth-token')
                    ?<Link to={`/quiz/flexbox`}><Button>Start A Quiz: <QuizContent quizTheme={"flexbox"}/></Button></Link>
                    :<Link to='/login'><Button>Start A Quiz</Button></Link>       
                }
            </div>
        </div>
    );
}

export default Flexbox;