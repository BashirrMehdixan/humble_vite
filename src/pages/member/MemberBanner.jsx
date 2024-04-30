import {MemberBannerComponent} from "/src/components/BannerComponent"

const MemberBanner = () => {
    return (
        <>
            <div className="humble-member-bg">
                <div className="container">
                    <MemberBannerComponent
                        banImg={"/assets/images/member/member-1.jpeg"}
                        bannerHead={"Humble Choice offers huge discounts on great bundles of PC games, with new releases every month"}
                        img={"./assets/images/member/member-1.jpeg"}
                        btnLink={"checkout"}
                        btnText={"Become a member"}
                    />
                </div>
            </div>
        </>
    )
}

export default MemberBanner;