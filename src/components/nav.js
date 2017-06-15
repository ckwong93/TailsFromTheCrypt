import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

  render() {
    return (
      // <!-- Navigation -->
      <div>
        <h1>TailsFromTheCrypt</h1>
        <Link to="/top"><h1>Top Crypto</h1></Link>
        <Link to="/search"><h1>Search</h1></Link><br></br>
      </div>

    );
  }
}
