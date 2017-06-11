import { combineReducers } from 'redux';
import CryptoReducer from './reducer_crypto';
import TopReducer from './reducer_top';

const rootReducer = combineReducers({
  crypto: CryptoReducer,
  top: TopReducer
});

export default rootReducer;
