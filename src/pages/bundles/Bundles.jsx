import {useContext} from "react";
import {Helmet} from "react-helmet";
import {GameContext} from "/src/context/Games/GameContext";
import {BundleCard} from "/src/components/Cards";

const Bundles = () => {
    const {games} = useContext(GameContext);
    return (
        games &&
        <>
            <Helmet>
                <title>Humble Bundle | Bundles</title>
            </Helmet>
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
            <div className="page-item">
                <div className="head-box">
                    <h4 className="small-head">
                        Books
                    </h4>
                </div>
                <div className="flex">
                    {games.map((game, index) => <BundleCard key={index} bundle={game} path={"books"}/>)}
                </div>
            </div>
            <div className="page-item">
                <div className="head-box">
                    <h4 className="small-head">
                        Software
                    </h4>
                </div>
                <div className="flex">
                    {games.map((game, index) => <BundleCard key={index} bundle={game} path={"software"}/>)}
                </div>
            </div>
        </>
    )
}

export default Bundles;