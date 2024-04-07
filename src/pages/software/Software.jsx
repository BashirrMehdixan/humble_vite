import {useContext} from "react";
import {GameContext} from "/src/context/Games/GameContext";
import {BundleCard} from "/src/components/Cards";

const Software = () => {
    const {games} = useContext(GameContext);
    return (
        <>
            <div className="page-item">
                <div className="head-box">
                    <h4 className="small-head">
                        Software
                    </h4>
                </div>
                <div className="flex">
                    {games.map((game, index) => <BundleCard key={index} bundle={game}/>)}
                </div>
            </div>
        </>
    )
}
export default Software;