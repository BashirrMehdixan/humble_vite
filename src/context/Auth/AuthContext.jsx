import {createContext, useEffect, useState} from "react";
import pb from "/src/store/pocketbase";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [isValid, setIsValid] = useState(pb.authStore.isValid);
    useEffect(() => {
        const getGames = async () => {
            const records = await pb.collection('users').getFullList();
            setUsers(records);
        }
        getGames()
    }, [])
    console.log(users)
    return (
        <AuthContext.Provider value={{users, setUsers, isValid, setIsValid}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;