import {useContext, useEffect, useState} from "react";
import {AuthContext} from "/src/context/Auth/AuthContext";

const Register = () => {
    const {users, setUsers} = useContext(AuthContext);
    const [data, setData] = useState("");
    const formData = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setData({...data, [name]: val});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://dummyjson.com/users/add", {
            method: "POST",
            body: JSON.stringify({
                name: data.name,
                password: data.password,
                email: data.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(json => setUsers([...users, json]));
        console.log(users)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name={"name"} onChange={formData}/><br/>
                <input type="email" name={"email"} onChange={formData}/> <br/>
                <input type="password" name={"password"} onChange={formData}/>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}

export default Register;