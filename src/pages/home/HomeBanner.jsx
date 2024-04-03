import BannerComponent from "/src/components/BannerComponent";

const HomeBanner = () => {
    return (
        <>
            <section className="home-banner-section">
                <div className="container">
                    <BannerComponent banImg={"main-banner"} />
                </div>
            </section>
        </>
    )
}

export default HomeBanner;