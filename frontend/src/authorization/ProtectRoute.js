import React,{useContext} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
// import { AuthContext } from './AuthContext';


const ProtectRoute = ()=>{
    const isAuthenticated = !!localStorage.getItem('token');  //check the token is localstorage
    return isAuthenticated ? <Outlet/>: <Navigate to="/login" />;
}

export default ProtectRoute;