import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header>
                <div className="top-head">
                    <h2>
                        <Link to={"/"}>
                            Own Warhammer Age of Sigmar: Realms of Ruin & Nioh 2 with March’s Humble Choice!
                        </Link>
                    </h2>
                </div>
            </header>
        </>
    )
}

export default Navbar;