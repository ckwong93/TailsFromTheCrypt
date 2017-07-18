import {RANDOM_CRYPTO} from '../actions/index';

export default function ( state = [], action){
  switch(action.type){
    case RANDOM_CRYPTO:
    console.log('Action received', action);
      return [action.payload.data, ...state]
  }
  return state;
}
