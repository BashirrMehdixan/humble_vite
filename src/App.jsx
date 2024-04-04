import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer} from 'react-toastify';

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "/src/pages/home/Home";
import Games from "/src/pages/products/Games";
import GameDetail from "/src/pages/products/GameDetail";
import Bundles from "/src/pages/products/Bundles";
import BundleDetail from "/src/pages/products/BundleDetail";

// CSS
import "./scss/App.css";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: "/games",
                    element: <Games/>
                },
                {
                    path: "/games/:slug",
                    element: <GameDetail/>
                },
                {
                    path: "/bundles",
                    element: <Bundles/>
                },
                {
                    path: "/bundles/:slug",
                    element: <BundleDetail/>
                }
            ]
        }

    ])
    return (
        <>
            <RouterProvider router={router}/>
            <ToastContainer/>
        </>
    )
}

export default App;