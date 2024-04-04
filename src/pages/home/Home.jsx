import HomeBanner from "./HomeBanner";
import Featured from "./Featured";
import BundleBanner from "./BundleBanner";
import HomeBundles from "./HomeBundles";
import HomeGames from "./HomeGames";

const Home = () => {
    return (
        <>
            <HomeBanner/>
            <Featured/>
            <BundleBanner/>
            <HomeBundles/>
            <HomeGames/>
        </>
    )
}

export default Home;