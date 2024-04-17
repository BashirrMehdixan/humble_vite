import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import pb, {currentUser, users} from "../store/pocketbase.js";
import {AuthContext} from "/src/context/Auth/AuthContext";

export const AuthHooks = () => {
    const navigate = useNavigate();
    const {setIsValid} = useContext(AuthContext);
    const {reset} = useForm();

    const signup = async (data) => {
        try {
            if (data.password === data.passwordConfirm) {
                const record = await pb.collection('users').create({
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    passwordConfirm: data.password
                });
                await pb.collection('users').requestVerification(data.email);
                toast.success(`Nice to meet you ${record.username}`);
                navigate("/");
                reset();
            } else {
                toast.error("Your password does not match!");
            }
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

    const verifyEmail = async () => {
        try {
            toast.success("Email sent");
            return await pb.collection('users').requestVerification(currentUser.email);
            ;
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

    const resetRequest = async (data) => {
        try {
            if (users.find(item => item.email === data.email)) {
                toast.success(`Reset email sent to ${data.email}`);
                return await pb.collection('users').requestPasswordReset(data.email);
            } else {
                return toast.error(`${data.email} not found`);
            }
        } catch (e) {
            console.log(e);
        }
    }
    const logout = () => {
        pb.authStore.clear();
        setIsValid(pb.authStore.isValid);
        toast.success(`You have logged out!`);
        navigate("/login");
    }
    return {signup, login, logout, changeEmail, verifyEmail, resetRequest}
}
