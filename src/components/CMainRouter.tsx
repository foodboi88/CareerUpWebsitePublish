import React, { Suspense } from "react";
import { RouterItem } from "../common/define-type";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CLoading from "./CLoading";
import CPrivateRouter from "./CPrivateRouter";

const LoginModule = React.lazy(() => import("../pages/login/Login"));
const Homepage = React.lazy(() => import("../pages/home/Home"));
const Advisor = React.lazy(() => import("../pages/advisor/Advisor"));
// const PageNotFound = React.lazy(() => import("pages/404"));


const RouterArr: RouterItem[] = [
    {
        path: "/",
        component: LoginModule
    },
    {
        path: "/home",
        component: Homepage,
        noExact: true
    },
    {
        path: "/advisor",
        component: Advisor,
        noExact: true
    },
    
    // {
    //     path: "*",
    //     component: PageNotFound
    // },
   
]

export default function CMainRouter(): JSX.Element {
    return (
        <Router>
            <Suspense>
                <Switch>
                    <Route path="/login">
                        <LoginModule />
                    </Route>
                    <CPrivateRouter path="/">
                        <>
                            <Switch>
                                {RouterArr.map(({ path, component: Component, noExact, ...rest }) => {
                                    return <Route path={path} component={Component} key={path} exact={noExact ? false : true} {...rest} />
                                })}
                            </Switch>
                        </>
                    </CPrivateRouter>
                </Switch>
            </Suspense>
        </Router>
    )
}