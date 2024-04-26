import {useEffect, useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import AuthHooks from "/src/hooks/AuthHooks";
import pb from "/src/store/pocketbase";

// Icons
import {RiCloseFill} from "react-icons/ri";
import {FaRegUserCircle} from "react-icons/fa";
import {IoSearch, IoMenu} from 'react-icons/io5';

const Navbar = () => {
    const location = useLocation();
    const {logout} = AuthHooks();

    // states
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const [nav, setNav] = useState(false);
    const [profile, setProfile] = useState(false);


    useEffect(() => {
        document.body.style.overflow = nav ? "hidden" : "auto";
    }, [nav])
    useEffect(() => {
        document.body.style.backgroundColor = location.pathname === "/" ? "#494F5C" : "#272930";
    }, [location])


    const handleLogout = async () => {
        setProfile(!profile);
        await logout();
    }
    return (
        <>
            <div className={`overlay ${!nav && 'none'}`} onClick={() => setNav(!nav)}></div>
            <header>
                <div className={`top-head ${open && 'close'}`}>
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
                                <li className={"logo-item"}>
                                    <NavLink to={'/'} className={"logo"}>
                                        <img
                                            src={'/assets/images/logo-white.svg'}
                                            alt="Humble Bundle Logo"
                                        />
                                    </NavLink>
                                </li>
                                <li className={"nav-item"}>
                                    <NavLink to={"bundles"}>Bundles</NavLink>
                                </li>
                                <li className={"nav-item"}>
                                    <NavLink to={"store"}>Store</NavLink>
                                </li>
                                <li className={"nav-item"}>
                                    <NavLink to={"choice"}>Choice</NavLink>
                                </li>
                                <li className={"nav-item"}>
                                    <NavLink to={"blog"}>Blog</NavLink>
                                </li>
                                <li className={"nav-item"}>
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

                                <li className={`right-nav-item ${pb.authStore.model && 'none'}`}>
                                    <NavLink to={"/register"}>Sign up</NavLink>
                                </li>
                                <li className={`right-nav-item ${pb.authStore.model && 'none'}`}>
                                    <NavLink to={"/login"}>Sign in</NavLink>
                                </li>
                                <li className={`relative right-nav-item ${!pb.authStore.model && 'none'}`}>
                                    <FaRegUserCircle onClick={() => setProfile(!profile)}/>
                                    <ul className={`profile-list ${!profile && "none"}`}>
                                        <li>
                                            <Link to={"/wishlist"}>Wishlist</Link>
                                        </li>
                                        <li>
                                            <Link to={"/wallet"}>Wallet</Link>
                                        </li>
                                        <li>
                                            <Link to={"/settings"}>Settings</Link>
                                        </li>
                                        <li onClick={handleLogout}>
                                            Logout
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <ul className="mobile-nav">
                            <li className="nav-item">
                                <button
                                    className="btn drp-btn"
                                    onClick={() => setNav(!nav)}
                                >
                                    <IoMenu/>
                                </button>
                            </li>
                            <li className="nav-item">
                                <div className="search-box">
                                    <input
                                        type="search"
                                        className={`form-control ${active && "full"}`}
                                    />
                                    <button
                                        className="btn btn-search"
                                        onClick={() => setActive(!active)}
                                    >
                                        <IoSearch/>
                                    </button>
                                </div>
                            </li>
                            <li className={"logo-item"}>
                                <NavLink to={"/"} className={`logo ${active && "none"}`}>
                                    <img
                                        src={"/assets/images/logo-white.svg"}
                                        alt="Humble Bundle"
                                    />
                                </NavLink>
                            </li>
                            <ul className={`navbar ${nav && "active"}`}>
                                <li className={"navbar-item"}>
                                    <button
                                        className={"btn close-btn"}
                                        onClick={() => setNav(false)}
                                    >
                                        <RiCloseFill/>
                                    </button>
                                </li>
                                <li className="navbar-item">
                                    <span>Bundles</span>
                                    <ul className="menu">
                                        <li>
                                            <NavLink to={"/games"}>Games</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/books"}>Books</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/software"}>Software</NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;