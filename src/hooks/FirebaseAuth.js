import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification, updateEmail,
    signOut
} from "firebase/auth";
import {auth, db} from "/src/store/firebase";
import {toast} from "react-toastify";
import {collection, addDoc} from "firebase/firestore";


const FirebaseAuth = () => {
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.auth.user);
    console.log(currentUser);
    const registerUser = async (data) => {
        try {
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password);
            console.log(user)
            // await sendEmailVerification(currentUser);
            let createUser = ""
            if (user) {
                createUser = await addDoc(collection(db, 'users'), {
                    id: user.uid,
                    firstname: "",
                    lastname: "null",
                    username: data.username,
                    email: data.email,
                    image: user.photoURL,
                    emailVerified: user.emailVerified,
                    birthday: "null",
                    creationTime: user.metadata.creationTime,
                    phoneNumber: user.phoneNumber,
                });
                return createUser;
            }
            toast.success(`Welcome ${data.username}`);
            navigate("/settings")
            return {user, createUser}
        } catch (e) {
            toast.error(e.message);
        }
    }
    const login = async (data) => {
        try {
            const {user} = await signInWithEmailAndPassword(auth, data.email, data.password);
            toast.success(`Welcome back, ${data.email}`);
            navigate("/settings")
            return user;
        } catch (e) {
            toast.error(e.message);
        }

    }
    const verifyEmail = async () => {
        try {
            await sendEmailVerification(auth.currentUser);
            toast.success(`Email sent to ${currentUser.email}`);
            navigate("/settings")
        } catch (e) {
            toast.error(e.message)
            console.log(e)
        }
    }

    const changeEmail = async (data) => {
        try {
            await updateEmail(auth.currentUser, data.email);
            await sendEmailVerification(data.email);
            toast.success(`Email change requested. Please verify your new email address.`);
        } catch (e) {
            // Display error message
            toast.error(e.message);
            console.error(e);
        }
    }
    const logout = async () => {
        if (currentUser) {
            try {
                await signOut(auth);
                toast.success("You logged out successfully");
                navigate("/login")
                return true;
            } catch (e) {
                toast.error(e.message);
            }
        }
    }
    return {registerUser, login, verifyEmail, changeEmail, logout};
}

export default FirebaseAuth;