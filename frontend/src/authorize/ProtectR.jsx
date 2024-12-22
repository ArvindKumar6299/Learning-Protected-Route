import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectR = ()=>{
    try {
        const token = localStorage.getItem("token");
        const isAuthenticated = !!token;  //Check if token exists
        return  isAuthenticated ? <Outlet/> : <Navigate to="/login"/>;
    } catch (error) {
        console.error("Error accessing localStorage: ", error);
        return <Navigate to="/login" />;
    };
  
}

export default ProtectR;