import BannerComponent from "/src/components/BannerComponent";

const HomeBanner = () => {
    return (
        <>
            <section className="home-banner-section">
                <div className="container">
                    <BannerComponent banImg={"main-banner"} btnText={"JOIN NOW"}/>
                </div>
            </section>
        </>
    )
}

export default HomeBanner;