import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import AuthHooks from "/src/hooks/AuthHooks";

const Register = () => {
    const {register, handleSubmit} = useForm();
    const {signup} = AuthHooks();
    return (
        <>
            <div className="container">
                <div className="register-box">
                    <form onSubmit={handleSubmit(signup)}>
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