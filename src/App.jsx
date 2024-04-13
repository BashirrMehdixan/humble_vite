import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer} from 'react-toastify';

// Layouts
import RootLayout from "/src/layouts/RootLayout";
import BundleLayout from "/src/layouts/BundleLayout.jsx";
// Pages
import Home from "/src/pages/home/Home";
import Bundles from "/src/pages/bundles/Bundles";
import Games from "/src/pages/games/Games";
import GameDetail from "/src/pages/games/GameDetail";
import Books from "/src/pages/books/Books";
import BookDetail from "/src/pages/books/BookDetail";
import Software from "/src/pages/software/Software";
import SoftwareDetail from "/src/pages/software/SoftwareDetail";
import NotFound from "/src/pages/NotFound";

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
                    path: "bundles",
                    element: <BundleLayout/>,
                    children: [
                        {
                            index: true,
                            element: <Bundles/>
                        },
                        {
                            path: "games",
                            element: <Games/>
                        },
                        {
                            path: "books",
                            element: <Books/>
                        },
                        {
                            path: "software",
                            element: <Software/>
                        },
                    ]
                },
                {
                    path: "/bundles/games/:slug",
                    element: <GameDetail/>
                },
                {
                    path: "/bundles/books/:slug",
                    element: <GameDetail/>
                },
                {
                    path: "/bundles/software/:slug",
                    element: <GameDetail/>
                },
                {
                    path: "*",
                    element: <NotFound/>
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