import {Link} from "react-router-dom";

// Icons
import {FaSteam, FaWindows} from "react-icons/fa";

export const GameCard = ({game}) => {
    return (
        <>
            <div className="product-card">
                <div className="product-img">
                    <Link to={`/games/${game.slug}`}>
                        <img src={game.background_image} alt=""/>
                    </Link>
                </div>
                <div className="product-info">
                    <h4 className="product-title">
                        <Link to={`/games/${game.slug}`}>
                            {game.name}
                        </Link>
                    </h4>
                    <ul className="platform-list">
                        <li className={"platform-item"}>
                            <Link to={"https://store.steampowered.com"} target={"_blank"}>
                                <FaSteam/>
                            </Link>
                        </li>
                        <li className={"platform-item"}>
                            <Link to={"https://microsoft.com"} target={"_blank"}>
                                <FaWindows/>
                            </Link>
                        </li>
                        <li className="platform-item"><Link className="btn btn-outer"></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}