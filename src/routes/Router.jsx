import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import StartLearningPage from "../pages/StartLearningPage";
import HomePage from "../pages/HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../layouts/AuthLayout";
import TutorialPage from "../pages/TutorialPage";
import Lessons from "../components/Lessons";
import PrivateTutorialPage from "../pages/PrivateTutorialPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path: "/start-learning",
                element: <StartLearningPage></StartLearningPage>,
            },
            {
                path: "/lessons/:lesson_no",
                element: <Lessons></Lessons>,
                loader: () => fetch("/languageData.json").then(res => res.json())

            },
            {
                path: "/tutorials",
                element: <PrivateTutorialPage><TutorialPage></TutorialPage></PrivateTutorialPage>
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);
export default router