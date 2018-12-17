import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//pages
import Login from '../pages/client/Login.jsx';

const renderRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <AppRoute Component={Login} props={props} />} />
      </Switch>
    </Router>
  );
};

const AppRoute = ({ Component, Layout, props }) => {
  if (Layout) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  }

  if (!Component) {
    return <Layout {...props} />;
  }

  return <Component {...props} />;
};

export default renderRoutes;
