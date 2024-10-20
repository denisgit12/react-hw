import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import CartsPage from "../pages/CartsPage";
import HomePage from "../pages/HomePage";

export const routes = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {index:true, element:<HomePage/>},
            {path:'products', element:<ProductsPage/>},
            {path: 'carts', element:<CartsPage/>}
        ]}
])