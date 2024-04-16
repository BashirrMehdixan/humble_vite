import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "/src/context/Auth/AuthContext";
import {useContext} from "react";
import {RegisterFunctions} from "../../hooks/register";

const Register = () => {
    const {register, handleSubmit, reset} = useForm();
    const {signup} = RegisterFunctions();
    const onSubmit = async data => {
        await signup(data);
        reset();
    }
    return (
        <>
            <div className="container">
                <div className="register-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className={"form-control"}
                                placeholder={"Username"}
                                {...register("username")}
                            />
                        </div>
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
                        <div className="form-group">
                            <input
                                type="password"
                                className={"form-control"}
                                placeholder={"Confirm Password"}
                                {...register("passwordConfirm")}
                            />
                        </div>
                        <button
                            className="btn btn-blue">Sign up
                        </button>
                    </form>
                    <div className={"register-text"}>
                        Already have an account? <Link to={"/login"}>Log in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;