import React from 'react';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import Header from './components/presentational/Header';

import { Route } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/newspage" component={NewsPage} />
      </main>
    </React.Fragment>
  );
};

export default App;
