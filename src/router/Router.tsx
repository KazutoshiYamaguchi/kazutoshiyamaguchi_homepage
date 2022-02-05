import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Entrance } from "../components/pages/Entrance";
import { Home } from "../components/pages/Home";

export const Router: VFC = memo(() => {
    return (
        <Switch>

            <Route exact path="/">
                <Entrance />
            </Route>
            <Route path="/home">
                <Home />
            </Route>

        </Switch>
    );
});
