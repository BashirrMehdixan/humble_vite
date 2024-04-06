import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="not-found">
                <div className="container">
                    <div className="found-img">
                        <img src={"./assets/images/notfound.png"} alt={"Not Found"}/>
                    </div>
                    <h2 className="title">
                        THE PAGE YOU REQUESTED CANNOT BE FOUND
                    </h2>
                    <div className="inner-text">
                        This could be because the page has moved, no longer exists, or you typed in the wrong URL. If
                        you believe this page is missing, please file a support ticket so we can investigate the
                        problem. <Link to={"/support"}>Humble Support Link</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;