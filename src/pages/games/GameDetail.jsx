import {useContext} from "react";
import {useParams} from "react-router-dom";
import {GameContext} from "/src/context/Games/GameContext";

const GameDetail = () => {
    const {slug} = useParams();
    const {games} = useContext(GameContext);
    const game = games ? games.find(item => item.slug === slug) : "";
    return (
        game &&
        <>
            <div className="container">
                <img src={game.background_image} alt=""/>
            </div>
        </>
    )
}

export default GameDetail;