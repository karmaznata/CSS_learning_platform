import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./CSS/LoginSignUp.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
    username: '',
    email: '',
    password: '',
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8;
};

const LoginSignUp = () => {

    const [state, setState] = useState("Login");

    const [formData, setFormData] = useState(initialState);

    const [inputErrors, setInputErrors] = useState({
        username: false,
        email: false,
        password: false,
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setInputErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
    };
    const login = async () => {
        let responseData;
        console.log("Log func executes", formData);
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data)

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            localStorage.setItem('username', responseData.username);
            window.location.replace("/");
        } else {
            toast.error("The email or password is incorrect. Please try again.");
        }
    }

    const signup = async () => {
        const isUsernameValid = state === 'Login' || (state === 'Sign Up' && formData.username.trim() !== '');
        const isEmailValid = validateEmail(formData.email);
        const isPasswordValid = validatePassword(formData.password);

        if (isUsernameValid && isEmailValid && isPasswordValid) {
            let responseData;
            await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json()).then((data) => responseData = data)

            if (responseData.success) {
                setState("Login");
                setFormData({
                    username: '',
                    password: '',
                    email: '',
                });
                toast.success("You have been successfully registered!");
            } else {
                // setInputError("failedSignup");
                toast.success("The user with this email already exist. Try another email.");
            }
        } else {
            // Show validation errors
            setInputErrors({
                username: !isUsernameValid,
                email: !isEmailValid,
                password: !isPasswordValid,
            });
            toast.error('Invalid input. Please check your information.');
        }

    }

    // const changeHandler = (event) =>{
    //     setFormData({...formData,[event.target.name]: event.target.value});
    // }

    return (
        <div className="login-signup">
            <ToastContainer />
            <div className="login-continer">
                <h1>{state}</h1>
                <div className="login-container-flex">
                    <div className="login-fields">
                        {state === 'Sign Up' && (
                            <input
                                name="username"
                                value={formData.username}
                                onChange={changeHandler}
                                type="text"
                                placeholder="Your Name"
                                className={inputErrors.username ? 'error' : ''}
                            />
                        )}
                        <input
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            type="email"
                            placeholder="Email Address"
                            className={inputErrors.email ? 'error' : ''}
                        />
                        <input
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            type="password"
                            placeholder="Password"
                            className={inputErrors.password ? 'error' : ''}
                        />
                    </div>
                    <div className="login-button">
                        <Button onClick={() => (state === 'Login' ? login() : signup())}>
                            {state === 'Login' ? 'Login' : 'Sign Up'}
                        </Button>
                    </div>
                    <div className="signup-redirection-container">
                        {state === 'Sign Up' ? (
                            <p>
                                Already have an account?{' '}
                                <span onClick={() => {setState('Login'), setFormData(initialState)}}>Login here</span>
                            </p>
                        ) : (
                            <p>
                                Don't have an account?{' '}
                                <span onClick={() => {setState('Sign Up'), setFormData(initialState)}}>Sign up</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;