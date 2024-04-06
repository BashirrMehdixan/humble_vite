import {useContext} from "react";
import {NavLink} from "react-router-dom";
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
            <div className="container">
                <div className="pages-header">
                    <div className="head-box">
                        <div className="outlet-title">
                            <h4 className="uni-head">
                                Humble Bundles
                            </h4>
                            <p className="inner-text">
                                Our Bundles are limited-time collections of games, books, software, and more. Simply pay
                                what
                                you want and choose where your money goes, including to charity. Most Bundles come in
                                tiers
                                starting at only $1 - the more you give, the more you get!
                            </p>
                        </div>
                        <div className="title-img">
                            <img src={"./assets/images/animals/humble.png"} alt=""/>
                        </div>
                    </div>
                    <ul className="page-list">
                        <li>
                            <NavLink to={"/bundles"}>All Bundles</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/games"}>Games</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/books"}>Book</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/software"}>Software</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="page-outlet">
                    <div className="page-item">
                        <div className="head-box">
                            <h4 className="small-head">
                                Games
                            </h4>
                        </div>
                        <div className="flex">
                            {games.map((game, index) => <BundleCard key={index} bundle={game}/>)}
                        </div>
                    </div>
                    <div className="page-item">
                        <div className="head-box">
                            <h4 className="small-head">
                                Books
                            </h4>
                        </div>
                        <div className="flex">
                            {games.map((game, index) => <BundleCard key={index} bundle={game}/>)}
                        </div>
                    </div>
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
                </div>
            </div>
        </>
    )
}

export default Bundles;