import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import HomePage from "../pages/HomePage/HomePage";


export const routes = createBrowserRouter([

    {path: '/login', element: <LoginPage/>},
    {path:'/', element:<MainLayout/>, children:[
            {index:true, element:<HomePage/>},
            {path:'products', element:<ProductsPage/>}
        ]}
])