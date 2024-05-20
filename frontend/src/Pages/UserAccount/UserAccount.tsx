import React, { useState, useEffect } from "react";
import "./UserAccount.css";
import OverviewProfileInfo from "../../Components/OverviewProfileInfo/OverviewProfileInfo.tsx";
import OverviewQuizzes from "../../Components/OverviewQuizzes/OverviewQuizzes.tsx";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { EventRegister } from 'react-native-event-listeners';
import { User } from "../../Models/User.ts";
import { UserScore } from "../../Models/UserScores.ts";
import {API_URL} from './../../apiConnection.js';
interface Props {
  accountView: string;
}

const UserAccount : React.FC<Props> = ({ accountView }) => {

  const [userAccount, setAccountView] = useState<string>(accountView);
  const [user, setUser] = useState<User>();
  const [userScores, setUserScores] = useState<UserScore[]>([]);
  const navigate = useNavigate();
  let accountComponent;
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/user`);
        setUser(response.data.user);
        const getScores = await axios.get(`${API_URL}/getScores`);
        setUserScores(getScores.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (user) {
    switch (userAccount) {
      case "overview-profile-info":
        accountComponent = <OverviewProfileInfo user={user} />;
        break;
      case "overview-quizzes":
        accountComponent = <OverviewQuizzes userScores={userScores} />;
        break;
      default:
        accountComponent = null;
    }
  }

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${API_URL}/logout`, null, { withCredentials: true });
      console.log(response.data);

      if (response.data.success) {
        setUser(null);
        localStorage.removeItem("login");
        EventRegister.emit('userIsLoggedInEvent', false);
        navigate('/')
      }

    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="user-account-container">
      <div className="account-left-container">
        <div className="user-account-options">
          <hr />
          <label className={`click-label ${userAccount === 'overview-profile-info' ? "active" : ''}`} onClick={() => setAccountView("overview-profile-info")} onKeyDown={() => { }}>Profile</label>
          <label className={`click-label ${userAccount === 'overview-quizzes' ? "active" : ''}`} onClick={() => setAccountView("overview-quizzes")} onKeyDown={() => { }}>Quizzes</label>
          <hr />
          <label className="click-label" onClick={() => { handleLogout(); setAccountView("logout"); }} onKeyDown={() => { }}>Log out</label>
        </div>
      </div>
      <div className="account-right-container">
        <div className={`${userAccount}`}>
          {accountComponent}
        </div>
      </div>
    </div>

  );
}

export default UserAccount;