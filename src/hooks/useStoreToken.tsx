import axios from 'axios';
import { useState, createContext, useContext, useEffect } from "react";

export const UseAuthContext:React.Context<any> = createContext([]);

export const UseAuthWrapper = ({ children }:any) => {
    const [user, setUser] = useState(null as any);
    const [working, setWorking] = useState(true);
    const refreshToken = () => {
        axios.post(`${process.env.REACT_APP_URL}auth/refresh_token`,{},{withCredentials:true}).then((res) => {
            console.log(res)
            
            // setTimeout(() => {
            //     refreshToken()
            // }, (expires_in * 1000) - 500)

            setUser(res.data.accessToken);
        }).catch((err) => {
            console.log(err)
        })
    }
 useEffect(() => {
    refreshToken();
    // eslint-disable-next-line
  }, []);
    return (
        <UseAuthContext.Provider value={user} >
             { children}
        </UseAuthContext.Provider>
    )
}
