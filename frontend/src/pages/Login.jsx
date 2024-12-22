import React, {useState} from "react";
import  axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const Login = ()=>{
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({email:'', password:''});
    // const [message, setMessage] = useState('');

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const  handleError = (err)=>{
        toast.error(err, {
            position: "bottom-left",
        })
    };
    const  handleSuccess = (msg)=>{
        toast.success(msg, {
            position: "bottom-left",
        })
    };


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:9000/auth/login",formData,{ headers: {
                "Content-Type": "application/json",
            },withCredentials: true});
            console.log(data);
            const {success, message, token} = data;  //extract data from response
            if(success){
                handleSuccess(message);
                // Save the token to local storage
                window.localStorage.setItem("token", token);
                setTimeout(()=>{
                    navigate("/");
                },1000);
            
            }else{
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
        <div className="image-section">
            <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div className="form-section">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="p-5">Login</button>

                <span>
                Create account? <Link to={"/signup"}>Signup</Link>
               </span>
            </form>
            <ToastContainer/>
        </div>
        </div>
    )
}

export default Login;