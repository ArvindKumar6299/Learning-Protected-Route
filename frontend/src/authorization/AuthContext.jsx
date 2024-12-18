import React , {createContext, useState, useEffect} from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
      
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        // Check if the user is logged in (e.g., check localStorage or token validity)
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);  //convert truthly/falsy value to a boolean
    },[]);

    return(
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}  

// export const AuthProvider;


// createContext:
// Creates a context for sharing global data (AuthContext) across components without prop drilling.
// Here, it's used for managing and providing the isAuthenticated state.
// useEffect:A React hook that runs a piece of code after the component renders.