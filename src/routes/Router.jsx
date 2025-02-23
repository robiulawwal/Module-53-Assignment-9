import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import StartLearningPage from "../pages/StartLearningPage";
import HomePage from "../pages/HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>,
            },
            {
                path:"/start-learning",
                element:<StartLearningPage></StartLearningPage>,
                loader:()=>fetch("/languageData.json").then(res=>res.json())
            },
        ],
    },
    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
]);
export default router