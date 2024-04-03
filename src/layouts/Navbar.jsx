import {useState} from "react";
import {NavLink} from "react-router-dom";

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
                        <NavLink to={"/"}>
                            Own Warhammer Age of Sigmar: Realms of Ruin & Nioh 2 with March’s Humble Choice!
                        </NavLink>
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
                                    <NavLink to={'/'} className={"logo"}>
                                        <img src={'./assets/images/logo-white.svg'} alt=""/>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"bundles"}>Bundles</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"store"}>Store</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"choice"}>Choice</NavLink>
                                </li>
                                <li className={"nav-item"}>
                                    <NavLink to={"blog"}>Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"about"}>About</NavLink>
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
                                    <NavLink to={"register"}>Sign up</NavLink>
                                </li>
                                <li className="right-nav-item">
                                    <NavLink to={"login"}>Sign in</NavLink>
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