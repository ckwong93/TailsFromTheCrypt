import { combineReducers } from 'redux';
import CryptoReducer from './reducer_crypto';

const rootReducer = combineReducers({
  crypto: CryptoReducer
});

export default rootReducer;
