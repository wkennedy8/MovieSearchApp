import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
