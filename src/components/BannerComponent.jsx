import {Link} from "react-router-dom";

export const BannerComponent = ({banImg, btnText}) => {
    return (
        <>
            <div className={`banner-box ${banImg}`}>
                <div className="banner-content">
                    <h4 className="uni-head">
                        Humble Choice offers huge discounts on great bundles of PC games, with new releases
                        every month
                    </h4>
                    <p className="inner-text">
                        Build your ideal 19th century society in Victoria 3. Fight for survival against
                        unspeakable monstrosities in The Callisto Protocol. And more!
                    </p>
                    <ul className="condition">
                        <li>
                            Over $303 USD worth of games for only $11.99 to keep forever
                        </li>
                        <li>
                            Save up to 20% on thousands of games in our store
                        </li>
                        <li>
                            Exclusive member perks including even deeper discounts and offers
                        </li>
                        <li>
                            5% of your purchase goes to charity
                        </li>
                        <li>
                            Skip a month or cancel anytime
                        </li>
                    </ul>
                    <Link to={"membership"} className={"btn btn-blue"}>{btnText}</Link>
                </div>
            </div>
        </>
    )
}

export const MemberBanner = ({banImg, btnText}) => {
    return (
        <>
            <div className={`banner-box ${banImg}`}>
                <div className="banner-content">
                    <h4 className="uni-head">
                        Humble Choice offers huge discounts on great bundles of PC games, with new releases
                        every month
                    </h4>
                    <p className="inner-text">
                        Build your ideal 19th century society in Victoria 3. Fight for survival against
                        unspeakable monstrosities in The Callisto Protocol. And more!
                    </p>
                    <ul className="condition">
                        <li>
                            Over $303 USD worth of games for only $11.99 to keep forever
                        </li>
                        <li>
                            Save up to 20% on thousands of games in our store
                        </li>
                        <li>
                            Exclusive member perks including even deeper discounts and offers
                        </li>
                        <li>
                            5% of your purchase goes to charity
                        </li>
                        <li>
                            Skip a month or cancel anytime
                        </li>
                    </ul>
                    <Link to={"membership"} className={"btn btn-blue"}>{btnText}</Link>
                </div>
            </div>
        </>
    )
}