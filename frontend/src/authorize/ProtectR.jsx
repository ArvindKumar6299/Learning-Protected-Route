import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectR = ()=>{
    try {
        const isAuthenticated = !!localStorage.getItem("token");
        return  isAuthenticated ==="true"? <Outlet/>:<Navigate to="/login"/>;
    } catch (error) {
        console.error("Error accessing localStorage: ", error);
        return <Navigate to="/login" />;
    };
  
}

export default ProtectR;