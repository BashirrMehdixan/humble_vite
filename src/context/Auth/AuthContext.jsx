import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => setUsers(data.users));
    }, [])
    console.log(users)
    return (
        <AuthContext.Provider value={{users, setUsers}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;