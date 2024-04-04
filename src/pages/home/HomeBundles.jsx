import {useContext} from "react";
import {Link} from "react-router-dom";
import {GameContext} from "/src/context/Games/GameContext";
import {BundleCard} from "/src/components/ProductCards";
import {HiOutlineArrowSmRight} from "react-icons/hi";

const HomeBundles = () => {
    const {games} = useContext(GameContext);
    return (
        games &&
        <>
            <section className="bundles-section">
                <div className="container">
                    <div className="head-box">
                        <h3 className="small-head">Bundles</h3>
                        <Link to={"/bundles"} className={"border-bottom"}>
                            <span>View bundles</span>
                            <HiOutlineArrowSmRight/>
                        </Link>
                    </div>
                    <div className="flex bundles-container">
                        {games.map((bundle, index) => <BundleCard key={index} bundle={bundle}/>)}
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeBundles;