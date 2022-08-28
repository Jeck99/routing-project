import { createContext, useEffect, useState } from "react";
import { getUsers } from "../services/users.service";

export const usersContext = createContext();

export default function UsersProvider({children}){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        getUsers()
        .then(result=>setUsers(result))
    },[])
    return(
        <usersContext.Provider value={{users,setUsers}}>
            {children}
        </usersContext.Provider>
    )
}