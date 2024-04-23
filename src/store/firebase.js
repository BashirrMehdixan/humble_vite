import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDllKmIsgEXzo-jhaxjOEdZwKI1zlUhtZw",
    authDomain: "humble-vite.firebaseapp.com",
    projectId: "humble-vite",
    storageBucket: "humble-vite.appspot.com",
    messagingSenderId: "1081258503728",
    appId: "1:1081258503728:web:75897e59fd73bd4e8d47f5"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);