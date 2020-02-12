import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Admin = lazy(() => import('./pages/Admin'));
const SingIn = lazy(() => import('./pages/SingIn'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Routes: React.FC = () => (
  <Router>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/" component={SingIn} />
        <Route path="/admin" component={Admin} />
        <Route
          path="/dashboard"
          component={(): JSX.Element => (
            <>
              <Header />
              <Dashboard />
            </>
          )}
        />

        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
