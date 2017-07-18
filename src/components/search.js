import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CryptoList from '../containers/crypto_list';
import AboutSearch from '../components/aboutSearch';
import Nav from './nav';

export default class Search extends Component {

  render() {
    return (
      <div>
        <Nav />
        <AboutSearch />
        <SearchBar />
        <CryptoList />
      </div>
    );
  }
}
