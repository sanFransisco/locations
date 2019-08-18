import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MaterialLocationTableConnected } from './materialLocationTable';
import { MaterialCategoryTableConnected } from './materialCategoryTable';
import { WdsMap } from './WdsMap';
import { Home } from './Home';

export const WsdRouter = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/manage/categories" component={MaterialCategoryTableConnected} />
                <Route path="/manage/locations" component={MaterialLocationTableConnected} />
                <Route path="/map" component={WdsMap}></Route>
            </Switch>
            {/* making sure to provice the links and route to home page */}
            {props.children}
        </Router>
    );
}
