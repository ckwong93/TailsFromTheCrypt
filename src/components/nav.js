import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {

  render() {
    return (
      // <!-- Navigation -->
      <div>
        <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                <div className="navbar-header">
                    Tails From the Crypt
                </div>
        </nav>
        <Link to="/" className="btn btn-primary">Back to Index</Link>
      </div>

    );
  }
}
