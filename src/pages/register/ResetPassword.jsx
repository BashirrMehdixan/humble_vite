import {useForm} from "react-hook-form";
import {AuthHooks} from "/src/hooks/AuthHooks";

const ResetPassword = () => {
    const {register, handleSubmit} = useForm();
    const {resetRequest} = AuthHooks();
    return (
        <>
            <div className="container">
                <div className="reset-box">
                    <h3 className="small-head">Password reset</h3>
                    <p className="inner-text">
                        We&apos;ll send a password setup link to your account&apos;s email address.
                    </p>
                    <div className="img-box">
                        <img src={"/assets/images/icons/mail.svg"} alt={"Mail"}/>
                    </div>
                    <form onSubmit={handleSubmit(resetRequest)}>
                        <div className="reset-form">
                            <div className="form-group">
                                <input
                                    type="email"
                                    className={"form-control"}
                                    placeholder={"Enter your email"}
                                    {...register("email")}
                                />
                            </div>
                            <button className="btn btn-blue">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetPassword;