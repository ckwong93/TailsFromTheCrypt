import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavHeader extends Component {

    render() {
        return (
            <nav className="navbar navbar-light">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="Navlinks">TailsFromTheCrypt</Link>
                </li>
                <li className="nav-item">
                  <Link to="/top" className="Navlinks">Top Crypto</Link>
                </li>
                <li className="nav-item">
                  <Link to="/search" className="Navlinks">Search</Link>
                </li>
              </ul>
            </nav>




        );
    }
}

            //
            // <div>
            //     <nav>
            //         <div className="nav-wrapper">
            //
            //             <ul id="nav-mobile" className="left Navlinks">
            //                 <li>
            //                   <Link to="/" className="Navlinks">TailsFromTheCrypt</Link>
            //                 </li>
            //
            //             </ul>
            //             <ul id="nav-mobile" className="right hide-on-med-and-down Navlinks">
            //                 <li>
            //                     <Link to="/top" className="Navlinks">
            //                         Top Crypto
            //                     </Link>
            //                 </li>
            //                 <li>
            //                     <Link to="/search" className="Navlinks">Search</Link>
            //                 </li>
            //             </ul>
            //         </div>
            //     </nav>
            // </div>
