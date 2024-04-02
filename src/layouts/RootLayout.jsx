// import {Outlet} from "react-router-dom";
import Navbar from "/src/layouts/Navbar";
import Footer from "/src/layouts/Footer";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default RootLayout;