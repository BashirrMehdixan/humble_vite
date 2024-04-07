import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

const BundleLayout = () => {
    const [active, setActive] = useState(false);
    const [activePage, setActivePage] = useState("Bundles");
    return (
        <>
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
                            <img src={"/assets/images/animals/humble.png"} alt="Humble Bundle"/>
                        </div>
                    </div>
                    <ul className="page-list">
                        <li>
                            <Link to={"/bundles"}>All Bundles</Link>
                        </li>
                        <li>
                            <Link to={"games"}>Games</Link>
                        </li>
                        <li>
                            <Link to={"books"}>Book</Link>
                        </li>
                        <li>
                            <Link to={"software"}>Software</Link>
                        </li>
                    </ul>
                    <div
                        className="active-page"
                        onClick={() => setActive(!active)}>
                        <span>Filter: {activePage}</span>
                        <ul className="page-navigation" style={{'display': active ? 'block' : "none"}}>
                            <li onClick={(event) => setActivePage(event.target.innerText)}>
                                <Link to={"/bundles"}>All Bundles</Link>
                            </li>
                            <li onClick={(event) => setActivePage(event.target.innerText)}>
                                <Link to={"games"}>Games</Link>
                            </li>
                            <li onClick={(event) => setActivePage(event.target.innerText)}>
                                <Link to={"books"}>Books</Link>
                            </li>
                            <li onClick={(event) => setActivePage(event.target.innerText)}>
                                <Link to={"software"}>Software</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-outlet">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default BundleLayout;