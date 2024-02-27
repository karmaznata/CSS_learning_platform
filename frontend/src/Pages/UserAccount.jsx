import React, { useState } from "react";
import "./CSS/UserAccount.css";
import {Link} from "react-router-dom";
import OverviewProfileInfo from "../Components/OverviewProfileInfo/OverviewProfileInfo";
import OverviewQuizzes from "../Components/OverviewQuizzes/OverviewQuizzes";

const UserAccount = ({ handleLogout }) => {

    const [accountView, setAccountView] = useState('overview-profile-info');
    let accountComponent;

    switch (accountView) {
      case "overview-profile-info":
        accountComponent = <OverviewProfileInfo />;
        break;
      case "overview-quizzes":
        accountComponent = <OverviewQuizzes />;
        break;
      default:
        accountComponent = null;
    }

    return ( 
        <div className="user-account-container">
            <div className="account-left-container">
                <div className="user-account-options">
                    <hr/>
                    <label className={`click-label ${accountView==='overview-profile-info'?"active": ''}`} onClick={()=>setAccountView("overview-profile-info")} onKeyDown={() => {}}>Profile</label>
                    <label className={`click-label ${accountView==='overview-quizzes'?"active": ''}`} onClick={()=>setAccountView("overview-quizzes")} onKeyDown={() => {}}>Quizzes</label>
                    <hr/>
                    <Link to='/login'><label className="click-label"onClick={() => {handleLogout(); setAccountView("logout");}} onKeyDown={() => {}}>Log out</label></Link>
                </div>
            </div>
           <div className="account-right-container">
                <div className={`${accountView}`}>
                    {accountComponent}
                </div>
           </div>
        </div> 
    );
}
 
export default UserAccount;