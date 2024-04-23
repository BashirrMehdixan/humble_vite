import {useNavigate} from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification, updateEmail,
    updateProfile,
    signOut
} from "firebase/auth";
import {auth, db} from "/src/store/firebase";
import {toast} from "react-hot-toast";
import {collection, doc, setDoc} from "firebase/firestore";


const FirebaseAuth = () => {
    const navigate = useNavigate();
    const registerUser = async (data) => {
        try {
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await sendEmailVerification(auth.currentUser);
            let createUser = ""
            if (user) {
                createUser = await setDoc(doc(collection(db, 'users'), user.uid.toString()), {
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
                })
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
            toast.success(`Email sent to ${auth.currentUser.email}`);
            navigate("/settings")
        } catch (e) {
            toast.error(e.message)
        }
    }
    const update = async (data) => {
        try {
            await updateProfile(auth.currentUser, data)
            toast.success("Your profile updated")
        } catch (e) {
            toast.error(e.message);
        }
    }
    const changeEmail = async (data) => {
        try {
            // await sendEmailVerification(auth.currentUser, data.email);
            await updateEmail(auth.currentUser, data.email);
            toast.success(`Email change requested. Please verify your new email address.`);
        } catch (e) {
            toast.error(e.message);
        }
    }
    const logout = async () => {
        if (auth.currentUser) {
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
    return {registerUser, login, verifyEmail, changeEmail, logout, update};
}

export default FirebaseAuth;