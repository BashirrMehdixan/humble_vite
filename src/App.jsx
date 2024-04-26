import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Toaster} from "react-hot-toast";

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
import Register from "/src/pages/register/Register";
import Login from "/src/pages/register/Login";
import ResetPassword from "/src/pages/register/ResetPassword";
import Dashboard from "/src/pages/profile/Dashboard";
import Member from "/src/pages/member/Member";
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
                    element: <Login/>
                },
                {
                    path: "/settings",
                    element: <Dashboard/>
                },
                {
                    path: "/reset-password",
                    element: <ResetPassword/>
                },
                {
                    path: "/membership",
                    element: <Member/>

                }
                ,
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
            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={8}
            />
        </>
    )
}

export default App;