import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CryptoList from '../containers/crypto_list';

export default class Search extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <CryptoList />
      </div>
    );
  }
}