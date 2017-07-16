import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

export default class NavHeader extends Component {

    render() {
        return (
            // <nav className="navbar navbar-light">
            //   <ul className="nav navbar-nav">
            //     <li className="nav-item">
            //       <Link to="/" className="Navlinks">TailsFromTheCrypt</Link>
            //     </li>
            //     <li className="nav-item">
            //       <Link to="/top" className="Navlinks">Top Crypto</Link>
            //     </li>
            //     <li className="nav-item">
            //       <Link to="/search" className="Navlinks">Search</Link>
            //     </li>
            //   </ul>
            // </nav>

            <Navbar inverse collapseOnSelect style={{"margin-bottom" :"0px"}}>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">React-Bootstrap</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Action</MenuItem>
                      <MenuItem eventKey={3.2}>Another action</MenuItem>
                      <MenuItem eventKey={3.3}>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                    <NavItem eventKey={1} href="#">Link Right</NavItem>
                    <NavItem eventKey={2} href="#">Link Right</NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

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
