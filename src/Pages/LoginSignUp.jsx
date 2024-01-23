import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./CSS/LoginSignUp.css";


const LoginSignUp = () => {

    const [state, setState] = useState("Sign Up");
    const [formData, setFormDate] = useState({
        username:"",
        password:"",
        email:""
    })
    const login = async () =>{
        let responseData;
        console.log("Log func executes", formData);
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }else{
            alert(responseData.errors);
        }
    }

    const signup = async () =>{
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)

        if(responseData.success){
            setState("Login");
        }else{
            alert(responseData.errors);
        }
    }

    const changeHandler = (event) =>{
        setFormDate({...formData,[event.target.name]: event.target.value});
    }
    
    return (
        <div className="login-signup">
            <div className="login-continer">
                <h1>{state}</h1>
                <div className="login-container-flex">
                    <div className="login-fields">
                        {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" /> : <></> }
                        <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
                        <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
                    </div>
                    <div className="login-button">
                        <Button onClick={()=>{state === "Login" ? login() : signup()}}>{state === "Login" ? 'Login' : 'Sign Up'}</Button>
                    </div>
                    <div className="signup-redirection-container">
                    {state === "Sign Up" 
                    ? <p>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p> 
                    : <p>Don't have an account? <span onClick={()=>{setState("Sign Up")}}>Sign up</span></p> }
                        
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default LoginSignUp;