import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

// Custom Context
import GameProvider from "/src/context/Games/GameContext";
import AuthProvider from "/src/context/Auth/AuthContext";

import store from "/src/store/store";
import App from '/src/App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AuthProvider>
            <GameProvider>
                <App/>
            </GameProvider>
        </AuthProvider>
    </Provider>
)
