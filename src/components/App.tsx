import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { fetchSymbols } from '../redux/actions/convertActions';

// components
import MainPage from '../pages/MainPage';
import RatePage from '../pages/RatePage';
import Header from './Header';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSymbols());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/exchange-rates" component={RatePage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
