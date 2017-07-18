import axios from 'axios';
const ROOT_URL = 'https://api.cryptonator.com/api/ticker/';
const TOP_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=50'
const TEST_URL= `https://cors-anywhere.herokuapp.com/http://api.coinmarketcap.com/v1/ticker/`;

const API_URL = 'http://localhost:3090;'

export const FETCH_CRYPTO = 'FETCH_CRYPTO';
export const TOP_CRYPTO = 'TOP_CRYPTO';

export function fetchCrypto(ticker){
  const url = `${TEST_URL}${ticker}`;
  const request = axios.get(url);
  console.log('Request',request);

  return {
    type: FETCH_CRYPTO,
    payload: request,
  };
}

export function topCrypto(){
  const request = axios.get(TOP_URL);
  console.log('Request', request);
  return {
    type: TOP_CRYPTO,
    payload: request,
  };
}

export function signinUser( {email, password }){
  return function(dispatch){
    // submit email pw to server
    axios.post(`${API_URL}/signin`, {email, password});
    // if request is good
    // -update state to indicate user is authenticated
    // save jwt token
    // redirect to new route
    // if request is bad
    // show an error to the user
}

}
