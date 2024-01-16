import React from "react";
import Button from "react-bootstrap/Button";
import "./CSS/LoginSignUp.css";


const LoginSignUp = () => {
    return (
        <div className="login-signup">
            <div className="login-continer">
                <h1>Login</h1>
                <div className="login-container-flex">
                    <div className="login-fields">
                        {/* <input type="text" placeholder="Your Name" /> */}
                        <input type="email" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="login-button">
                        <Button>Login</Button>
                    </div>
                    <div className="signup-redirection-container">
                        <p>Don't have an account? <span>Sign up</span></p>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default LoginSignUp;