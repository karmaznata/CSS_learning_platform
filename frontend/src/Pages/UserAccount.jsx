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
        <div className="user-account-continer">
            <div className="account-left-container">
                <div className="user-account-options">
                    <hr/>
                    <label onClick={()=>setAccountView("overview-profile-info")} onKeyDown={() => {}}>Profile</label>
                    <label onClick={()=>setAccountView("overview-quizzes")} onKeyDown={() => {}}>Quizzes</label>
                    <hr/>
                    <Link to='/login'><label onClick={handleLogout} onKeyDown={() => {}}>Log out</label></Link>
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