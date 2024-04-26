import {MemberBanner} from '/src/components/BannerComponent';

const Member = () => {
    return (
        <>
            <div className="humble-member-bg">
                <div className="container">
                    <MemberBanner
                        banImg={"/assets/images/member/member-1.jpeg"}
                        bannerHead={"Humble Choice offers huge discounts on great bundles of PC games, with new releases every month"}
                        img={"./assets/images/member/member-1.jpeg"}
                        btnLink={"checkout"} btnText={"Become a member"}
                    />
                </div>
            </div>
        </>
    )
}

export default Member;