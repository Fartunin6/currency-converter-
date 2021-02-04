import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import MainPage from '../pages/MainPage';
import RatePage from '../pages/RatePage';
import Header from './Header';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/exchange-rate" component={RatePage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
