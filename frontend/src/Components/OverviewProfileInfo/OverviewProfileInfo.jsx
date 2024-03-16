import React, { useEffect } from "react";
import "./OverviewProfileInfo.css";
import Button from 'react-bootstrap/Button';

const OverviewProfileInfo = (props) => {

    return ( 
        <div className="profile-info-container">
            <div className="profile-info-header fs-4">
                <label>Profile Info</label>
                <hr/>
            </div>
            <div className="user-info-inputs">
                <label className="input">
                    <input className="input__field" type="text" placeholder=" " value={props.user.username} />
                    <span className="input__label">Username</span>
                </label>
                <label className="input">
                    <input className="input__field" type="text" placeholder=" " value={props.user.email} />
                    <span className="input__label">Email</span>
                </label>
            </div>
            <div className="profile-info-footer">
                <Button variant="primary">Update</Button>
            </div>
        </div>
      );
}
 
export default OverviewProfileInfo;