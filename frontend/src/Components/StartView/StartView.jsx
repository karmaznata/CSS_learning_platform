import React from "react";
import "./StartView.css";
import Typed from 'typed.js';

const StartView = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['p {<br/> &emsp;color: red;<br/>  &emsp;width: 500px;<br/>  &emsp;border: 1px solid black;<br/>}'],
            typeSpeed: 50,
            contentType: 'html',
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div className="start-view-div">

            <div className="start-view-left">

                <h1>Welcome to CSS world!</h1>
                <p>Here you are going to learn the most common CSS layouts,<br />
                    and which of them you can use for your purposes.</p>
                {/* <Button className="start-button" variant="secondary">Start</Button> */}

                <a href="/tutorial" className="cta" >
                    <span>Start to learn</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </a>
            </div>
            <div className="start-view-right">
                <div className="typing-text" ref={el}></div>
            </div>

        </div>
    );
}

export default StartView;