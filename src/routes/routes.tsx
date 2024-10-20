import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/usersPage/UsersPage";
import PostsPage from "../pages/postsPage/PostsPage";
import CommentsPage from "../pages/commentsPage/CommentsPage";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/homePage/HomePage";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {index: true, element:<HomePage/>},
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>}

        ],
        errorElement:<ErrorLayout/>
    }
])  