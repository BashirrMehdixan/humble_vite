import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import pb from "../store/pocketbase.js";
import {AuthContext} from "/src/context/Auth/AuthContext";

export const RegisterFunctions = () => {
    const navigate = useNavigate();
    const {isValid, setIsValid} = useContext(AuthContext);
    const {reset} = useForm();
    const signup = async (data) => {
        try {
            const record = await pb.collection('users').create({
                username: data.username,
                email: data.email,
                password: data.password,
                passwordConfirm: data.passwordConfirm,
            });
            setIsValid(!pb.authStore.isValid);
            toast.success(`Nice to meet you ${record.username}`);
            navigate("/")
            reset();
        } catch (e) {
            toast.error(e.message)
        }
    }
    const login = async (data) => {
        try {
            const authData = await pb.collection('users').authWithPassword(data.email, data.password);
            setIsValid(pb.authStore.isValid);
            toast.success(`Welcome back, ${authData.record.username}`);
            navigate("/")
            reset();
        } catch (e) {
            toast.error(e.message)
        }
    }

    const logout = () => {
        toast.success(`You have logged out!`);
        pb.authStore.clear();
        setIsValid(pb.authStore.isValid);
        navigate("/login");
    }
    return {signup, login, logout}
}
