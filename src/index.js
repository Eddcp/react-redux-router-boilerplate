import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/newspage" component={NewsPage} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);