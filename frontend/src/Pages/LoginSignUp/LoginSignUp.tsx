import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./LoginSignUp.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { EventRegister } from 'react-native-event-listeners';
import {API_URL} from './../../apiConnection.js';

const initialState = {
    username: '',
    email: '',
    password: '',
};

const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8;
};

const LoginSignUp = () => {

    const [state, setState] = useState("Login");
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();

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
    const handleSignup = async () => {
        try {
            const isUsernameValid = state === 'Login' || (state === 'Sign Up' && formData.username.trim() !== '');
            const isEmailValid = validateEmail(formData.email);
            const isPasswordValid = validatePassword(formData.password);
            if (isUsernameValid && isEmailValid && isPasswordValid) {
                const response = await axios.post(`${API_URL}/signup`, formData)
                console.log(response.data);
                if (response.data.success) {
                    setState("Login");
                    setFormData({
                        username: '',
                        password: '',
                        email: '',
                    });
                    toast.success("You have been successfully registered!");
                } else {
                    toast.error("The user with this email already exist. Try another email.");
                }
            } else {
                setInputErrors({
                    username: !isUsernameValid,
                    email: !isEmailValid,
                    password: !isPasswordValid,
                });
                toast.error('Invalid input. Please check your information.');
            }
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    const handleLogin = async () => {
        if (formData.email && formData.password) {
            axios.post(`${API_URL}/login`, formData)
                .then(res => {
                    console.log(res);
                    if (res.data.success) {
                        navigate('/');
                        localStorage.setItem("login", "true");
                        EventRegister.emit('userIsLoggedInEvent', "true");
                    }
                    else {
                        toast.error('Wrong email or password. Please try again.');
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            toast.error('Please enter your email or password');
        }

    };

    return (
        <div className="login-signup">
            <ToastContainer />
            <div className="circle-design login big"></div>
            <form className="login-continer">
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
                                autoComplete="current-password"
                            />
                        )}
                        <div className={state === 'Sign Up' && (inputErrors.email && inputErrors.password) ? 'email-password-container-wrong' : 'email-password-container'}>
                            <div>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={changeHandler}
                                    type="email"
                                    placeholder="Email Address"
                                    className={inputErrors.email && state === 'Sign Up'  ? 'error' : ''}
                                    autoComplete="email"
                                />
                                {inputErrors.email && state === 'Sign Up' && (
                                    <label className="warning-message fw-light">Invalid email!</label>
                                )}
                            </div>
                            <div>
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={changeHandler}
                                    type="password"
                                    placeholder="Password"
                                    className={inputErrors.password && state === 'Sign Up' ? 'error' : ''}
                                    autoComplete="current-password"
                                />
                                {inputErrors.password && state === 'Sign Up' &&(
                                    <label className="warning-message fw-light">Password must contain at least 8 symbols!</label>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="login-button">
                        <Button className="btn-light" onClick={() => (state === 'Login' ? handleLogin() : handleSignup())}>
                            {state === 'Login' ? 'Login' : 'Sign Up'}
                        </Button>
                    </div>
                    <div className="signup-redirection-container">
                        {state === 'Sign Up' ? (
                            <p className="fw-light" style={{ textAlign: "center" }}>
                                Already have an account?{' '}
                                <span onClick={() => { setState('Login'); setFormData(initialState); }} onKeyDown={() => { }}>Login here</span>
                            </p>
                        ) : (
                            <p className="fw-light" style={{ textAlign: "center" }}>
                                Don't have an account?{' '}
                                <span onClick={() => { setState('Sign Up'); setFormData(initialState); }} onKeyDown={() => { }}>Sign up</span>
                            </p>
                        )}
                    </div>
                </div>
            </form>
            <div className="circle-design login small"></div>
        </div>
    );
}

export default LoginSignUp;