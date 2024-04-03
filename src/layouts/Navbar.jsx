import {useState} from "react";
import {Link} from "react-router-dom";

// Icons
import {RiCloseFill} from "react-icons/ri";
import {IoSearch} from 'react-icons/io5';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header>
                <div className={`top-head ${open ? 'close' : ''}`}>
                    <h2>
                        <Link to={"/"}>
                            Own Warhammer Age of Sigmar: Realms of Ruin & Nioh 2 with March’s Humble Choice!
                        </Link>
                    </h2>
                    <button className="btn close-btn" onClick={() => setOpen(!open)}>
                        <RiCloseFill/>
                    </button>
                </div>
                <nav>
                    <div className="container">
                        <div className="main-nav">
                            <ul className="navbar">
                                <li>
                                    <Link to={'/'} className={"logo"}>
                                        <img src={'./assets/images/logo-white.svg'} alt=""/>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"bundles"}>Bundles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"store"}>Store</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"choice"}>Choice</Link>
                                </li>
                                <li className={"nav-item"}>
                                    <Link to={"blog"}>Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"about"}>About</Link>
                                </li>
                            </ul>

                            <ul className="right-nav">
                                <li className="right-nav-item">
                                    <div className="search-box">
                                        <input
                                            type="search"
                                            className={"form-control nav-search"}
                                            placeholder="Search..."
                                        />
                                        <button className="btn search-btn">
                                            <IoSearch/>
                                        </button>
                                    </div>
                                </li>
                                <li className="right-nav-item">
                                    <Link to={"register"}>Sign up</Link>
                                </li>
                                <li className="right-nav-item">
                                    <Link to={"login"}>Sign in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;