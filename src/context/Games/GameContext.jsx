import {useEffect, createContext, useState} from "react";

export const GameContext = createContext(undefined);

const GameProvider = ({children}) => {
    const [games, setGames] = useState(null);
    useEffect(() => {
        // fetch("https://api.rawg.io/api/games?key=4c39d6d513e045ad818796f335e57fa8")
        //     .then(res => res.json())
        //     .then(data => setGames(data.results));
        fetch("/src/data/games.json")
            .then(res => res.json())
            .then(data => setGames(data.results));
    }, [])
    return (
        <GameContext.Provider value={{games, setGames}}>
            {children}
        </GameContext.Provider>
    )
}
export default GameProvider;