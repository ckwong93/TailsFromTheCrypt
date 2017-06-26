import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

export default class NavHeader extends Component {

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">

                        <ul id="nav-mobile" className="left Navlinks">
                            <li>
                              <Link to="/" className="Navlinks">TailsFromTheCrypt</Link>
                            </li>

                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down Navlinks">
                            <li>
                                <Link to="/top" className="Navlinks">
                                    Top Crypto
                                </Link>
                            </li>
                            <li>
                                <Link to="/search" className="Navlinks">Search</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        /* <Link to="/" className="project-title">Cryptopedia</Link>
        <Link to = "/top" className = "Navlinks pull-right" > Top Crypto </Link>
        <Link to="/search" className="Navlinks pull-right ">Search</Link> */
        /* <Navbar brand='TailsFromTheCrypt' right className="blackfont" style={{'background-color': 'white', 'color' : 'black'}}>
        <NavItem><Link to = "/top" className="Navlinks"> Top Crypto </Link></NavItem>
        <NavItem><Link to="/search" className="Navlinks">Search</Link></NavItem>
      </Navbar> */
        );
    }
}
