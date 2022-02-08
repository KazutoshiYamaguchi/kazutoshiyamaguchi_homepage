import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Entrance } from "../components/pages/Entrance";
import { DefalultLayout } from "../components/templates/DefaultLayout ";
import { HomeRoutes } from "./HomeRoutes"
import { Page404 } from "../components/pages/Page404"

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <Entrance />
            </Route>
            <Route path="kazutoshiyamaguchi_homepage/home" render={({ match: { url } }) => (
                <Switch>
                    {HomeRoutes.map((route) => (
                        <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                            <DefalultLayout>
                                {route.children}
                            </DefalultLayout>

                        </Route>
                    ))}
                </Switch>
            )} />
            <Route path="*">

                <DefalultLayout>
                    <Page404 />
                </DefalultLayout>
            </Route>
        </Switch>
    );
});
