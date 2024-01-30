import React from "react";
import "./OverviewProfileInfo.css";
import Button from 'react-bootstrap/Button';
const OverviewProfileInfo = () => {
    return ( 
        <div className="profile-info-container">
            <div className="profile-info-header">
                <label>Profile Info</label>
                <hr/>
            </div>
            <div className="user-info inputs">
                <input type="input" value={localStorage.getItem('username')}></input>
                <input type="input" value={localStorage.getItem('email')}></input>
            </div>
            <div className="profile-info-footer">
                <Button variant="primary">Update</Button>
            </div>
        </div>
      );
}
 
export default OverviewProfileInfo;