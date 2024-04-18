import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user"))
}
const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signupAction: (state, action) => {
            const {user} = action.payload;
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        loginAction: (state, action) => {
            const user = action.payload;
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        logoutAction: (state) => {
            state.user = null;
            localStorage.removeItem("user")
        }
    }
})

export const {loginAction, logoutAction, signupAction} = auth.actions;
export default auth.reducer;