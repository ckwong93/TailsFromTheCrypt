import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import Search from './components/search';
import Nav from './components/nav';
// import TopList from './containers/top_list';
import Top from './components/top';
import Home from './components/home';
// import AboutBitcoin from './components/aboutBitcoin';
// import AboutEth from './components/aboutEth';
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<div>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
          <Route path="/top" component={Top} />
          <Route path="/search" component={Search} />
          {/* <Route path="/bitcoin" component={AboutBitcoin} /> */}
          {/* <Route path="/ethereum" component={AboutEth} /> */}
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
</div>

  , document.querySelector('.container-box'));
