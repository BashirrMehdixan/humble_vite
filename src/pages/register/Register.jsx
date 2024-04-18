import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import FirebaseAuth from "/src/hooks/FirebaseAuth";
import {signupAction} from "/src/features/auth";

const Register = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const {registerUser} = FirebaseAuth();
    const onSubmit = async data => {
        const {user} = await registerUser(data);
        if (user) {
            dispatch(signupAction(user));
        }

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