import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ToastContainer} from 'react-toastify';

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "/src/pages/home/Home";
import Products from "/src/pages/products/Products";
import GameDetail from "/src/pages/products/GameDetail";

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
                    element: <Products/>
                },
                {
                    path: "/games/:slug",
                    element: <GameDetail/>
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