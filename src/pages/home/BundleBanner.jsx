import BannerComponent from "/src/components/BannerComponent";

const BundleBanner = () => {
    return (
        <>
            <div className="container">
                <BannerComponent banImg={"bundle-banner"} btnText={"Get the Bundle"}/>
            </div>
        </>
    )
}

export default BundleBanner;