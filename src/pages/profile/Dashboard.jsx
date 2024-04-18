import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import FirebaseAuth from "/src/hooks/FirebaseAuth";
import {useSelector} from "react-redux";

const Dashboard = () => {
    const {register, handleSubmit} = useForm();
    const currentUser = useSelector(state => state.auth.user);
    const {verifyEmail,changeEmail} = FirebaseAuth();
    const onSubmit = async (data) => {
        console.log(data.email)
        if (data.email) {
            await changeEmail(data);
        } else {
            toast.error("Error");
        }
    }
    return (
        currentUser &&
        <>
            <div className="container">
                <div className="settings-box">
                    <div className="head-box">
                        <h3 className="uni-head">
                            Account Information
                        </h3>
                        {!currentUser.emailVerified &&
                            <button className={"btn btn-blue"} onClick={verifyEmail}>Verify email</button>
                        }
                    </div>
                    <div className="settings-item">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="account-form">
                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className={"form-control"}
                                        defaultValue={currentUser.email}
                                        id={"email"}
                                        {...register("email")}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newPassword">
                                        New Password
                                    </label>
                                    <input type="password"
                                           className={"form-control"}
                                           id={"newPassword"}
                                           placeholder={"New Password"}
                                           {...register("newPassword")}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmNewPassword">
                                        New Password
                                    </label>
                                    <input type="password"
                                           className={"form-control"}
                                           id={"confirmNewPassword"}
                                           placeholder={"Confirm New Password"}
                                           {...register("confirmNewPassword")}
                                    />
                                </div>
                                <button type="submit" className={"btn btn-blue"}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;