import {useState} from "react";
import {useForm} from "react-hook-form";
import pb from "/src/store/pocketbase"
import {RegisterFunctions} from "/src/hooks/register";

const Dashboard = () => {
    const {register, handleSubmit} = useForm();
    const [lang, setLang] = useState("en");
    const {changeEmail} = RegisterFunctions();

    const handleEmail = async (data) => {
        await changeEmail(data);
    }
    return (
        <>
            <div className="container">
                <div className="settings-box">
                    <div className="head-box">
                        <h3 className="uni-head">
                            Account Information
                        </h3>
                    </div>
                    <div className="settings-item">
                        <form onSubmit={handleSubmit(handleEmail)}>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" defaultValue={pb.authStore.model.email} className={"form-control"}
                                       id={"email"} {...register("email")} />
                            </div>
                            <button type={"submit"} className="btn btn-blue">Update</button>
                        </form>
                        <form>
                            <div className="form-group">
                                <select
                                    value={lang}
                                    onChange={(e) => setLang(e.target.value)}
                                    className="form-control lang-select">
                                    <option value="eng">English</option>
                                    <option value="fr">Français</option>
                                    <option value="ch">简体中文</option>
                                    <option value="de">Deutsch</option>
                                    <option value="it">Italiano</option>
                                    <option value="es">Español</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;