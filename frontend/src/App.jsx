// import Practice from "./practice";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Test from "./pages/Test";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// import ProtectRoute from "./authorization/ProtectRoute";
import ProtectR from "./authorize/ProtectR";
// import ProtectRoute from "./authorization/ProtectRoute";
// import {AuthProvider} from "./authorization/AuthContext";

// const isAuthenticated = ()=>{
//   const token = localStorage.getItem('token');
//   return !!token;
// };

function App(){
   return(
      <div>
      <BrowserRouter
      future={{
         v7_startTransition: true,
         v7_relativeSplatPath: true,
       }}
      >
        {/* <AuthProvider> */}
    
    <Routes>
      
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      

      {/* Protected Routes */}
      {/* <Route  element={<ProtectRoute/>}> */}
      <Route  element={<ProtectR/>}>
      <Route path="/" element={<Home/>}/>
        <Route path="/test" element={<Test/>} />
        </Route>
      {/* </Route> */}
    </Routes>

   
   {/* </AuthProvider> */}
   </BrowserRouter>
   </div>
   )
}

export default App;