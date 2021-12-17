import React, {useState, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const initialState = {
        access_token:null,
        token_type:null,
    }
    const [authState, setAuthState] = useState(initialState);

    const login = (data)=>{
        localStorage.setItem("user",JSON.stringify(data));
        setAuthState(data);
    }

    const logout = ()=>{
        localStorage.removeItem("user");
        localStorage.clear();
        setAuthState(initialState);
    }

    const isAuthenticated = ()=>{

            if(!authState.access_token )
                return false;
            else 
                return  true;
    }
    return (
        <AuthContext.Provider 
        value={{login,logout,isAuthenticated, ...authState}}>
                {children}
        </AuthContext.Provider>)
}