import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="container">
                        <div className="flex">
                            <div className="left-footer">
                                <div className="logo">
                                    <img src={"../assets/images/logo-white.svg"} alt="Humble Bundle Logo"/>
                                </div>
                                <p className="inner-text">
                                    Get up to US$12 Wallet Credit to spend on your next store purchase!
                                </p>
                                <Link to={"/invite"} className={"invite-btn"}>INVITE A FRIEND</Link>
                            </div>
                            <div className="middle-footer">
                                <div className="flex">
                                    <div className="middle-item">
                                        <h5 className="title">About</h5>
                                        <ul className="menu-list">
                                            <li>
                                                <Link to={"/blog"}>Blog</Link>
                                            </li>
                                            <li>
                                                <Link to={"/developer"}>Developer</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="middle-item">
                                        <ul className="menu-list">
                                            <li>
                                                <Link to={"/support"}>Support</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="middle-item">
                                        <h5 className="title">Trending Games</h5>
                                        <ul className="menu-list">
                                            <li>
                                                <Link to={"/games"}>Dragon&apos; Dogma 2</Link>
                                            </li>
                                            <li>
                                                <Link to={"/games"}>Slay the Spire</Link>
                                            </li>
                                            <li>
                                                <Link to={"/games"}>The Callisto Protocol - Season Pass</Link>
                                            </li>
                                            <li>
                                                <Link to={"/games"}>NieR:Automata Game of the YoRHa Edition</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="middle-item">
                                        <h5 className="title">Newest Games</h5>
                                        <ul className="menu-list">
                                            <li>
                                                <Link to={"/games"}>Dragon&apos; Dogma 2</Link>
                                            </li>
                                            <li>
                                                <Link to={"/games"}>Slay the Spire</Link>
                                            </li>
                                            <li>
                                                <Link to={"/games"}>The Callisto Protocol - Season Pass</Link>
                                            </li>
                                            <li>
                                                <Link to={"/games"}>NieR:Automata Game of the YoRHa Edition</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;