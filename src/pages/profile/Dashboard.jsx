import {useForm} from "react-hook-form";
import AuthHooks from "/src/hooks/AuthHooks";
import pb from "/src/store/pocketbase";

const Dashboard = () => {
    const {register, handleSubmit} = useForm();
    const currentUser = pb.authStore.model;
    const {verifyEmail, changeEmail, resetPassword, updateProfile} = AuthHooks();
    const handleChange = async (data) => {
        await changeEmail(data);
    }
    const handleUpdate = async (data) => {
        await updateProfile(data);
    }
    return (
        pb.authStore.model &&
        <>
            <div className="container">
                <div className="settings-box">
                    <div className="head-box">
                        <h3 className="uni-head">
                            Account Information
                        </h3>
                        {!currentUser.verified &&
                            <button className={"btn btn-blue"} onClick={verifyEmail}>Verify email</button>
                        }
                    </div>
                    <div className="settings-item">
                        <form onSubmit={handleSubmit(handleChange)}>
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
                                <button className="btn btn-blue">Change email</button>
                            </div>
                        </form>
                        <form onSubmit={handleSubmit(handleUpdate)}>
                            <div className="account-form">
                                <div className="form-group">
                                    <label htmlFor="firstname">
                                        Firstname
                                    </label>
                                    <input
                                        type="text"
                                        className={"form-control"}
                                        defaultValue={currentUser.name}
                                        id={"firstname"}
                                        placeholder={"Enter your firstname"}
                                        {...register("firstname")}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">
                                        Lastname
                                    </label>
                                    <input
                                        type="text"
                                        className={"form-control"}
                                        defaultValue={currentUser.lastname}
                                        id={"lastname"}
                                        placeholder={"Enter your lastname"}
                                        {...register("lastname")}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className={"form-control"}
                                        id={"username"}
                                        defaultValue={currentUser.username}
                                        placeholder={"Enter your username"}
                                        {...register("username")}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="birthday">
                                        Date of birth
                                    </label>
                                    <input
                                        type="date"
                                        className={"form-control"}
                                        id={"birthday"}
                                        defaultValue={currentUser.birthday}
                                        {...register("birthday")}
                                    />
                                </div>
                                <button type={"submit"} className="btn btn-blue">Update profile</button>
                            </div>
                        </form>
                        <div className="pass-btn account-form">
                            <button className="btn btn-blue" onClick={resetPassword}>Reset password</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;