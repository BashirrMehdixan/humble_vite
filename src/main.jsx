import React from 'react';
import ReactDOM from 'react-dom/client';
import GameProvider from "/src/context/Games/GameContext";
import AuthProvider from "/src/context/Auth/AuthContext";
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <GameProvider>
            <App/>
        </GameProvider>
    </AuthProvider>
)
