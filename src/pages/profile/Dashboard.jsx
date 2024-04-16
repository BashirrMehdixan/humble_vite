import {useForm} from "react-hook-form";
import pb, {currentUser} from "/src/store/pocketbase";
import {RegisterFunctions} from "/src/hooks/register";
import {toast} from "react-toastify";

const Dashboard = () => {
    const {register, handleSubmit} = useForm();
    const {changeEmail, verifyEmail} = RegisterFunctions();
    const onSubmit = async (data) => {
        if (data.email) {
            await changeEmail(data);
        } else {
            toast.error("Error");
        }
    }
console.log(currentUser)
    return (
        <>
            <div className="container">
                <div className="settings-box">
                    <div className="head-box">
                        <h3 className="uni-head">
                            Account Information
                        </h3>
                        {!currentUser.verified && <button className={"btn btn-blue"} onClick={verifyEmail}>Verify email</button>}
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
                                        defaultValue={currentUser.email}
                                        className={"form-control"}
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