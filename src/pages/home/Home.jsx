import HomeBanner from "./HomeBanner";
import Featured from "./Featured";
import BundleBanner from "./BundleBanner";
import HomeBundle from "./HomeBundles"

const Home = () => {
    return (
        <>
            <HomeBanner/>
            <Featured/>
            <BundleBanner/>
            <HomeBundles/>
        </>
    )
}

export default Home;