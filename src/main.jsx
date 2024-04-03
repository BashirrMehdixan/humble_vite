import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import GameProvider from "/src/context/Games/GameContext";

ReactDOM.createRoot(document.getElementById('root')).render(
    <GameProvider>
        <App/>
    </GameProvider>
)
