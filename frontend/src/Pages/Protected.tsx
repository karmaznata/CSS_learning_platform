import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, isLoggedIn }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn === null || isLoggedIn === false) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return isLoggedIn && children;

}

export default Protected;