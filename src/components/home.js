import React, {Component} from 'react';
import NavHeader from '../components/nav';
import Cover from '../components/cover';
import About from '../components/about';
import AboutBitcoin from '../components/AboutBitcoin';
import AboutEth from '../components/AboutEth';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavHeader/>
                <Cover />
                <About />
                <AboutBitcoin />
                <AboutEth />
            </div>

        )
    }
}
