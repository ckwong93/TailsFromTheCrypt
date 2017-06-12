import axios from 'axios';
const ROOT_URL = 'https://api.cryptonator.com/api/ticker/';
const TOP_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=20'


export const FETCH_CRYPTO = 'FETCH_CRYPTO';
export const TOP_CRYPTO = 'TOP_CRYPTO';

export function fetchCrypto(ticker){
  const url = `${ROOT_URL}${ticker}-usd`;
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
