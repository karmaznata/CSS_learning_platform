import React, { useContext } from "react";
import { QuizContext } from "../../Context/QuizContext";
import Button from "react-bootstrap/Button";

const Flexbox = (props) => {

    const {all_quiz_tasks} = useContext(QuizContext);
    const {startQuiz} = useContext(QuizContext);

    return (
        <div>
            <div>
                <Button onClick={()=>{startQuiz("flexbox")}}>Start A Quiz</Button>
            </div>
        </div>
    );
}

export default Flexbox;