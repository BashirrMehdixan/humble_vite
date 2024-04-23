import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import AuthHooks from "/src/hooks/AuthHooks";


const Login = () => {
    const {register, handleSubmit} = useForm();
    const {login} = AuthHooks();
    return (
        <>
            <div className="container">
                <div className="register-box">
                    <form onSubmit={handleSubmit(login)}>
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
                        <div className="flex button-box">
                            <button className="btn btn-blue">Log in</button>
                            <Link to={"/reset-password"} className="btn btn-blue">Forget password?</Link>
                        </div>
                    </form>
                    <div className={"register-text"}>
                        Don&apos;t have an account? <Link to={"/register"}>Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;