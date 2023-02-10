import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

export class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback=''>
        <Switch>
          <Route exact path="/">
            <Redirect to="/"></Redirect>
          </Route>
          <Route exact path="/" component={ Home } />
        </Switch>
      </Suspense>
    )
  }
};

export default AppRoutes;
