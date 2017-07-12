import { combineReducers } from 'redux';
import CryptoReducer from './reducer_crypto';
import TopReducer from './reducer_top';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form: form,
  crypto: CryptoReducer,
  top: TopReducer
});

export default rootReducer;
