import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import pb, {currentUser} from "../store/pocketbase.js";
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
                passwordConfirm: data.passwordConfirm
            });
            await pb.collection('users').requestVerification(data.email);
            toast.success(`Nice to meet you ${record.username}`);
            navigate("/");
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
            console.log(isValid)
            navigate("/")
            reset();
        } catch (e) {
            toast.error(e.message)
        }
    }
    const verifyEmail = async () => {
        try {
            await pb.collection('users').requestVerification(currentUser.email);
            toast.success("Email sent");
            return true;
        } catch (e) {
            console.log(e)
        }
    }
    const changeEmail = async (data) => {
        try {
            await pb.collection('users').requestEmailChange(data.email);
            await pb.collection('users').requestVerification(data.email)
            navigate("/login");
            toast.success("Your e-mail changed successfully");
            pb.authStore.clear();
            reset();
        } catch (e) {
            toast.error(e.message);
            console.log(e);
        }
    }

    const logout = () => {
        pb.authStore.clear();
        setIsValid(currentUser.isValid);
        toast.success(`You have logged out!`);
        navigate("/login");
    }
    return {signup, login, logout, changeEmail, verifyEmail}
}