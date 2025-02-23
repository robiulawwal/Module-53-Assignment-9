import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import StartLearningPage from "../pages/StartLearningPage";
import HomePage from "../pages/HomePage";

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
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
]);
export default router