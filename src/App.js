import React from 'react';
import Home from './pages/Home';
import PostsPage from './pages/PostsPage';
import ItemsPage from './pages/ItemsPage';
import Header from './components/presentational/Header';

import { Route, Switch } from 'react-router-dom';

import './styles/main.scss';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/postspage" component={PostsPage} />
        <Route path="/items" component={ItemsPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
