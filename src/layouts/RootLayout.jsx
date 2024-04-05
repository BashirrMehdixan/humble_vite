import {useEffect} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Navbar from "/src/layouts/Navbar";
import Footer from "/src/layouts/Footer";

const RootLayout = () => {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
export default RootLayout;