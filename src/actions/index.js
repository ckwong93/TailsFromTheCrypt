import axios from 'axios';
const ROOT_URL = 'https://api.cryptonator.com/api/ticker/';
export const FETCH_CRYPTO = 'FETCH_CRYPTO';

export function fetchCrypto(ticker){
  const url = `${ROOT_URL}${ticker}-usd`;
  const request = axios.get(url);
  console.log('Request',request);

  return {
    type: FETCH_CRYPTO,
    payload: request,
  };
}
