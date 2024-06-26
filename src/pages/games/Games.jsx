import {useContext} from "react";
import {BundleCard} from "/src/components/Cards";
import {GameContext} from "/src/context/Games/GameContext";

const Games = () => {
    const {games} = useContext(GameContext);
    return (
        <>
            <div className="page-item">
                <div className="head-box">
                    <h4 className="small-head">
                        Games
                    </h4>
                </div>
                <div className="flex">
                    {games.map((game, index) => <BundleCard key={index} bundle={game} path={"games"}/>)}
                </div>
            </div>
        </>
    )
}

export default Games;