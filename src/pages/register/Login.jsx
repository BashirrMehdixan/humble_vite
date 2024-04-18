import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import FirebaseAuth from "/src/hooks/FirebaseAuth";

import {loginAction} from "/src/features/auth";


const Login = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const {login} = FirebaseAuth();

    const handleLogin = async (data) => {
        const user = await login(data);
        if (user) {
            dispatch(loginAction(user))
        }
    }
    return (
        <>
            <div className="container">
                <div className="register-box">
                    <form onSubmit={handleSubmit(handleLogin)}>
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