
import {useEffect, useState} from "react";
import  axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import { useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import Practice from "../practice";




const Home = ()=>{

    // const navigate = useNavigate();

    // const [cookies, removeCookie]  = useCookies([]);
    // const [name , setName] = useState("");

    // useEffect(()=>{

    //     const verifyCookie = async () => {
    //         console.log("fronted cookie:", cookies.token);
    //         console.log("Cookies:", req.cookies);

    //         // if(!cookies.token){
    //         //     navigate("/login");
    //         // }

    //         const {data} = axios.post("http://localhost:9000/auth",{},{withCredentials:true});
    //         setName(user);
    //         return status ? toast(`Hello ${user}`, {position: "top-right",}) :
    //           (removeCookie("token"), navigate("/login"));
    //     }
    //     verifyCookie();
    // }, [cookies,navigate,removeCookie]);
     

    const Logout = ()=>{
        removeCookie("token");
        navigate("/signup");
    };


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