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
                        <Link to={`/games/${game.slug}`} className={"border-bottom"}>
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


export const BundleCard = ({bundle, path}) => {
    return (
        <>
            <div className="bundle-item">
                <div className="bundle-img">
                    <Link to={`/bundles/${path}/${bundle.slug}`}>
                        <img src={bundle.background_image} alt={bundle.name}/>
                        <div className="bundle-overlay"></div>
                        <div className="bundle-details">
                            <h3 className="hover-title">PAY WHAT YOU WANT</h3>
                            <p className="hover-text">
                                Get DB BR 363 Loco Add-On DB BR 101 Loco Add-On Train Sim World 4: Standard Edition ,
                                and more!
                            </p>
                            <div className="detail-list">
                                <li>15 ITEMS</li>
                                <li>US$444 VALUE</li>
                                <li>1.694 SOLD</li>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="bundle-info">
                    <h4 className="bundle-title">
                        <Link to={`/bundles/${path}/${bundle.slug}`} className={"border-bottom"}>{bundle.name}</Link>
                    </h4>
                    <p className="time-left">
                        20 DAYS LEFT
                    </p>
                </div>
            </div>
        </>
    )
}