import {TOP_CRYPTO} from '../actions/index';

export default function ( state = [], action){
  switch(action.type){
    case TOP_CRYPTO:
    console.log('Action received', action);
      return [action.payload.data, ...state]
  }
  return state;
}
