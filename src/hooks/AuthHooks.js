import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {toast} from "react-hot-toast";
import pb, {users} from "../store/pocketbase.js";
import {AuthContext} from "/src/context/Auth/AuthContext";

const AuthHooks = () => {
    const navigate = useNavigate();
    const {setIsValid} = useContext(AuthContext);
    let currentUser = pb.authStore.model;
    const {reset} = useForm();
    const signup = async (data) => {
        try {
            if (data.password === data.passwordConfirm) {
                const record = await pb.collection('users').create({
                    username: data.username,
                    name: null,
                    surname: null,
                    avatar: null,
                    email: data.email,
                    password: data.password,
                    passwordConfirm: data.password
                });
                toast.success(`Nice to meet you ${record.username}`);
                navigate("/login");
                reset();
                return await pb.collection('users').requestVerification(data.email);
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
            toast.success(`Welcome back ${authData.record.username}`);
            if (authData) {
                navigate("/settings")
            }
            reset();
        } catch (e) {
            toast.error(e.message)
        }
    }

    const verifyEmail = async () => {
        try {
            toast.success("Email sent");
            return await pb.collection('users').requestVerification(currentUser.email);
        } catch (e) {
            toast.error(e.message)
        }
    }
    const updateProfile = async data => {
        try {
            await pb.collection("users").update(currentUser.id, {
                name: data.firstname,
                lastname: data.lastname,
                username: data.username,
                // avatar: data.avatar,
                birthday: data.birthday,
            })
            toast.success("Profile updated");
            return true;
        } catch (e) {
            toast.error(e.message);
        }
    }
    const changeEmail = async (data) => {
        try {
            await pb.collection('users').requestEmailChange(data.email);
            pb.authStore.clear();
            navigate("/login");
            toast.success("Your e-mail changed successfully");
            reset();
        } catch (e) {
            toast.error(e.message);
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
            toast.error(e.message);
        }
    }

    const resetPassword = async () => {
        try {
            toast.success(`Reset mail sent to ${currentUser.email}`);
            return await pb.collection("users").requestPasswordReset(currentUser.email);
        } catch (e) {
            toast.error(e.message);
        }
    }
    const logout = () => {
        pb.authStore.clear();
        setIsValid(pb.authStore.isValid);
        toast.success(`You have logged out!`);
        navigate("/login");
    }
    return {signup, login, logout, updateProfile, changeEmail, verifyEmail, resetRequest, resetPassword}
}

export default AuthHooks;