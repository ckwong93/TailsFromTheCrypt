import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CryptoList from '../containers/crypto_list';
import AboutTop from '../components/AboutSearch';
import Nav from './nav';

export default class Search extends Component {

  render() {
    return (
      <div>
        <Nav />
        <AboutTop />
        <SearchBar />
        <CryptoList />
      </div>
    );
  }
}
