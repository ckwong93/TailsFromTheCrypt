import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return (
        <div className = "header">
          <Link to="/" className="project-title">Cryptopedia</Link>
          <Link to = "/top" className = "Navlinks pull-right" > Top Crypto </Link>
          <Link to="/search" className="Navlinks pull-right ">Search</Link>
        </div>

    );
  }
}
