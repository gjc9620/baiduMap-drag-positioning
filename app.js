import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Positioning from './scripts/containers/Positioning.react.js';


const routes = (
    <Route name="app" path="/" >
        <Route name="hello" path="/positioning" handler={Positioning} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById("app"));
});