import {useContext} from "react";
import {Link} from "react-router-dom";
import {GameContext} from "/src/context/Games/GameContext";
import {GameCard} from "/src/components/Cards";

const HomeGames = () => {
    const {games} = useContext(GameContext);
    return (
        games &&
        <>
            <section className="games-section">
                <div className="container game-container">
                    <div className="head-box">
                        <h3 className="small-head">Games</h3>
                        <Link to={"/games"}>View Games</Link>
                    </div>
                    <div className="flex">
                        {games.map((game, index) => <GameCard key={index} game={game}/>)}
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeGames;