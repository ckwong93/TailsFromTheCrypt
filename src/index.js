import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import Search from './components/search';
import TopList from './containers/top_list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<div>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/top" component={TopList} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  </Provider>
</div>

  , document.querySelector('.container-box'));
