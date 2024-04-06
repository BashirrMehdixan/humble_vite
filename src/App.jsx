import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer} from 'react-toastify';

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "/src/pages/home/Home";
import Bundles from "/src/pages/bundles/Bundles";
import BundleDetail from "/src/pages/bundles/BundleDetail";
import Games from "/src/pages/games/Games";
import GameDetail from "/src/pages/games/GameDetail";
import Books from "/src/pages/books/Books";
import BookDetail from "/src/pages/books/BookDetail";
import Software from "/src/pages/software/Software";
import SoftwareDetail from "/src/pages/software/SoftwareDetail";

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
                    element: <Bundles/>
                },
                {
                    path: "bundles/:slug",
                    element: <BundleDetail/>
                },
                {
                    path: "games",
                    element: <Games/>
                },
                {
                    path: "/games/:slug",
                    element: <GameDetail/>
                },
                {
                    path: "books",
                    element: <Books/>
                },
                {
                    path: "books/:slug",
                    element: <BookDetail/>
                },
                {
                    path: "software",
                    element: <Software/>
                },
                {
                    path: "software/:slug",
                    element: <SoftwareDetail/>
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