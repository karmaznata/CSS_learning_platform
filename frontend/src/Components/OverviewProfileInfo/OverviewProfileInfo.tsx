import React, { useState } from "react";
import "./OverviewProfileInfo.css";
import Button from 'react-bootstrap/Button';
import { User } from "../../Models/User";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EventRegister } from "react-native-event-listeners";

interface UserProps {
    user: User;
}

const OverviewProfileInfo: React.FC<UserProps> = ({ user }) => {

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [emailValid, setEmailValid] = useState(true);
    const [usernameValid, setUsernameValid] = useState(true);
    const [validUpdate, setValidUpdate] = useState(false);

    const updateAccountUserData = async () => {
        try {
            const newUsername = username;
            const newEmail = email;
            const response = await axios.put('http://localhost:4000/updateUserData', { newUsername, newEmail });
            if (!response.data.success) {
                toast.error(`The user with this ${response.data.error} already exist`);
            } else {
                toast.success("Your data has been successfully changed!");
                newUsername && (user.username = newUsername) && setUsername(newUsername);
                newEmail && (user.email = newEmail) && setEmail(newEmail);
                EventRegister.emit("setUsernameUpdate", newUsername);
                setValidUpdate(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handelChangeUsername = (event) => {
        const validUsername = event.target.value.length == 0;
        if (validUsername) {
            setValidUpdate(false);
            setUsernameValid(false);
            setUsername(event.target.value);
        } else if (event.target.value.length < 30) {
            user.username === event.target.value ? setValidUpdate(false) : setValidUpdate(true);
            setUsername(event.target.value);
            setUsernameValid(true);
        }
    }

    const handelChangeEmail = (event) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const validEmail = emailRegex.test(event.target.value);
        validEmail ? setValidUpdate(true) : setValidUpdate(false);
        user.email === event.target.value ? setValidUpdate(false) : setValidUpdate(true);
        setEmailValid(validEmail);
        setEmail(event.target.value);
    }

    return (
        <div className="profile-info-container">
            <ToastContainer />
            <div className="profile-info-header fs-4">
                <label>Profile Info</label>
                <hr />
            </div>
            <div className="user-info-inputs">
                <label className="input">
                    <input className={`input-field ${usernameValid ? "" : 'username-invalid'}`} type="text" placeholder=" " onChange={handelChangeUsername} value={username} />
                    <span className="input-label">Username</span>
                </label>
                <label className="input">
                    <input className={`input-field ${emailValid ? "" : 'email-invalid'}`} type="text" placeholder=" " onChange={handelChangeEmail} value={email} />
                    <span className="input-label">Email</span>
                </label>
            </div>
            <div className="profile-info-footer">
                <Button variant="primary" onClick={updateAccountUserData} disabled={!validUpdate}>Update</Button>
            </div>
        </div>
    );
}

export default OverviewProfileInfo;