import { Component } from "react";
import { ROUTER } from "./ulits/router";
import HomePage from "./pages/user/homePage";
import {Routes, Route} from "react-router-dom";
import MeLayout from "./pages/user/theme/meLayout";
import AboutPage from "./pages/user/aboutPage";
const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME,
            Component: <HomePage/>,
        },
        {
            path: ROUTER.USER.ABOUT,
            Component: <AboutPage/>,
        },
    ];
    return (
        <MeLayout>
            <Routes>
                {
                    userRouter.map((item, key)=>(
                        <Route key= {key} path= {item.path} element = {item.Component} />
                    ))
                }
            </Routes>
        </MeLayout>
    )
}


const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;