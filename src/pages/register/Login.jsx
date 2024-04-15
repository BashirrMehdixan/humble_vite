import {useContext} from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "/src/context/Auth/AuthContext";
import {RegisterFunctions} from "/src/features/register";

const Login = () => {
    const {register, handleSubmit, reset} = useForm();
    const {login, logout} = RegisterFunctions();
    const {isValid} = useContext(AuthContext);
    const onSubmit = async (data) => {
        await login(data);
        reset();
    }
    return (
        <>
            <div className="container">
                <div className="register-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            className="btn btn-blue">Log in
                        </button>
                    </form>
                    <div className={"register-text"}>
                        Don&apos;t have an account? <Link to={"/register"}>Sign up</Link>
                    </div>
                    {isValid && <button className="btn btn-blue" onClick={logout}>Log out</button>}
                </div>
            </div>
        </>
    )
}

export default Login;