import React from "react";

const UserAccount = () => {
    return ( 
        <div>
            {localStorage.getItem("username")}
        </div> 
    );
}
 
export default UserAccount;