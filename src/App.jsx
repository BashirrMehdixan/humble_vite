import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import RootLayout from "/src/layouts/RootLayout";
import BundleLayout from "/src/layouts/BundleLayout";

// Pages
import Home from "/src/pages/home/Home";
import Bundles from "/src/pages/bundles/Bundles";
import Games from "/src/pages/games/Games";
import GameDetail from "/src/pages/games/GameDetail";
import Books from "/src/pages/books/Books";
import Software from "/src/pages/software/Software";
import Register from "./pages/register/Register";
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
                    path: "/register",
                    element: <Register/>
                },
                {
                    path: "/login",
                    element: <Register/>
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default App;