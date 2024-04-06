import {useContext} from "react";
import {useParams} from "react-router-dom";
import {GameContext} from "/src/context/Games/GameContext";

const BundleDetail = () => {
    const {slug} = useParams();
    const {games} = useContext(GameContext);
    const bundle = games.find(item => item.slug === slug);
    return (
        <>
            <div className="container">
                {<img src={bundle.background_image} alt={bundle.name}/>}
            </div>
        </>
    )
}
export default BundleDetail;