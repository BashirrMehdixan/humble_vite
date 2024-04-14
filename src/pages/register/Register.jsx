import {useContext, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import pb from "/src/store/pocketbase";
import {AuthContext} from "/src/context/Auth/AuthContext";
import {toast} from "react-toastify";

const Register = () => {
    const location = useLocation();
    const {register, handleSubmit} = useForm();
    const login = async (data) => {
        try {
            const authData = await pb.collection('users').authWithPassword(data.email, data.password);
            toast.success("Welcome", data.email)
        } catch (e) {
            console.log(e);
            toast.error(e)
        }
    }
    const signup = async (data) => {
        try {
            console.log("salam")
            toast.success("Welcome", data.email)
        } catch (e) {
            console.log(e);
            toast.error(e)
        }
    }
    return (
        <>
            <div className="container">
                <div className="register-box">
                    <form onSubmit={location.pathname === "/login" ? handleSubmit(login) : handleSubmit(signup)}>
                        <div className="form-group">
                            <input
                                type="email"
                                className={"form-control"}
                                placeholder={"Email"}
                                {...register("email")}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className={"form-control"}
                                placeholder={"Password"}
                                {...register("password")}
                            />
                        </div>
                        <button
                            className="btn btn-blue"> {location.pathname === "/register" ? "Sign up" : "Sign in"}</button>
                    </form>
                    {location.pathname === "/register" ?
                        <div className={"register-text"}>
                            Already have an account? <Link to={"/login"}>Log in</Link>
                        </div>
                        :
                        <div className={"register-text"}>
                            Don&apos;t have an account? <Link to={"/register"}>Sign up</Link>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Register;