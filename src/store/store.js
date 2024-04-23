import {configureStore} from '@reduxjs/toolkit';
import auth from "/src/features/auth";

const store = configureStore({
    reducer: {
        auth: auth
    },
})

export default store;