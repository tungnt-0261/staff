import { createContext, useReducer } from "react";
import { reducer } from './Reducer'
import { checkLogin, loginAPI, registerAPI, allUser } from "../api/auth";
import axios from "../api/axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const initState = {
        email: "",
        password: "",
        logged: false,
        // register: false,
        error: false
    }

    const [state, dispatch] = useReducer(reducer, initState);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({ type: 'logout' })
    }

    

    const data = {
        state, handleLogout, dispatch
    };

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;


