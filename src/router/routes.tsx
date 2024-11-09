import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import UserPage from "../pages/UserPage";
import CommentPage from "../pages/CommentPage";
import Posts from "../componenets/posts/Posts";
import TotalPage from "../pages/TotalPage";

export const routes = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children:[
            {path:'/posts', element:<Posts/>},
            {path:'/comments', element:<CommentPage/>},
            {path:'/users', element:<UserPage/>},
            {path: 'total', element: <TotalPage/>},
        ]}
])