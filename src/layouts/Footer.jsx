import {useState} from "react";
import {Link} from "react-router-dom";
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import {SiHumblebundle} from "react-icons/si";

const Footer = () => {
    const [lang, setLang] = useState("en");
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
                                <div className="middle-item">
                                    <h5 className="title">About</h5>
                                    <ul className="menu-list">
                                        <li>
                                            <Link to={"/blog"}>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to={"/support"}>Support</Link>
                                        </li>
                                        <li>
                                            <Link to={"/developer"}>Developer</Link>
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
                            <div className="right-footer">
                                <select
                                    value={lang}
                                    onChange={(e) => setLang(e.target.value)}
                                    className="form-control lang-select">
                                    <option value="eng">English</option>
                                    <option value="fr">Français</option>
                                    <option value="ch">简体中文</option>
                                    <option value="de">Deutsch</option>
                                    <option value="it">Italiano</option>
                                    <option value="es">Español</option>
                                </select>
                                <ul className="social-link">
                                    <li>
                                        <Link to={"https://facebook.com"}>
                                            <FaFacebookF/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://twitter.com"}>
                                            <FaTwitter/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"https://instagram.com"}>
                                            <FaInstagram/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>
                                            <SiHumblebundle/>
                                        </Link>
                                    </li>
                                </ul>
                                <p className="inner-text">
                                    The Humble community has contributed over US$254,000,000 to charity since 2010,
                                    making an amazing difference to causes all over the world.
                                </p>
                            </div>
                        </div>
                        <p className="copyright">
                            © 2011-2022 Humble Bundle, Inc. a Ziff Davis company. All Rights Reserved. Humble Bundle and
                            Humble Store are registered trademarks of Humble Bundle, Inc. and may not be used by third
                            parties without express written permission.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;