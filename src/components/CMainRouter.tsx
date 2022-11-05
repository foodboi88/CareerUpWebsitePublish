import React, { Suspense } from "react";
import { RouterItem } from "../common/define-type";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CLoading from "./CLoading";
import CPrivateRouter from "./CPrivateRouter";


const LoginModule = React.lazy(() => import("../pages/login/Login"));
const Homepage = React.lazy(() => import("../pages/home/Home"));
const Advisor = React.lazy(() => import("../pages/advisor/Advisor"));
const AskExpert = React.lazy(() => import("../pages/askExpert/AskExpert"));
const RegisterModule = React.lazy(() => import("../pages/register/Register"));
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
    {
        path: "/ask_expert",
        component: AskExpert,
        noExact: true
    }, {
        path: "/register",
        component: RegisterModule,
        noExact: true
    }
    // {
    //     path: "*",
    //     component: PageNotFound
    // },

]
const CMainRouter = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
export default CMainRouter
// export default function CMainRouter(): JSX.Element {
//     return (
//         <Router>
//             <Suspense>
//                 <Switch>
//                     <Route path="/login">
//                         <LoginModule />
//                     </Route>
//                     <CPrivateRouter path="/">
//                         <>
//                             <Switch>
//                                 {RouterArr.map(({ path, component: Component, noExact, ...rest }) => {
//                                     return <Route path={path} component={Component} key={path} exact={noExact ? false : true} {...rest} />
//                                 })}
//                             </Switch>
//                         </>
//                     </CPrivateRouter>
//                 </Switch>
//             </Suspense>
//         </Router>
//     )
// }