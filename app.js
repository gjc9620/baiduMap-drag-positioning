import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Positioning from './Positioning.react.js';

const includeMap = ()=>{
    alert(1)
};

const routes = (
    <Route name="app" path="/" >
        <Route name="hello" path="/positioning" handler={Positioning} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById("app"));
});