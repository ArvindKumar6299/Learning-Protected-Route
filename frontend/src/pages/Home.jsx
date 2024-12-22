
import {useEffect, useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import { useNavigate} from "react-router-dom";

import Practice from "../practice";
import {jwtDecode}  from "jwt-decode";




const Home = ()=>{

    const [name, setName]  = useState(""); //state to store the user name
   const navigate  = useNavigate();

   //fetch user's name from the token
   useEffect(()=>{
    try {
        const token = localStorage.getItem("token");
        if(token){
            const decodedToken = jwtDecode(token); //decode the JWT token
            setName(decodedToken.name); //Assuming the token has a name field
        }else{
            toast.error("Use is not authenticated. Redirecting to login.");
             navigate("/login");
        }
    } catch (error) {
        console.error("Error decoding token:", error);
        toast.error("Invaid token.Please log in again");
        navigate("/login");
    }
   },[navigate])

   //logut function
   const Logout = ()=>{
       localStorage.removeItem("token"); //remove the token
       toast.success("Logged out successfully.")
       navigate("/login");  //redirect to login page
   }

    return(
        <>
        <div className="home_page">
        <h1>Home Page</h1>
        <h3>{""} Welcome <span>{name}</span></h3>

        <button onClick={Logout}>LOGOUT</button>
        <Practice/>
        <ToastContainer/>
        </div>
        </>
    )
}

export default Home;