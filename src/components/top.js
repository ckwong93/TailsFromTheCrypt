import React, {Component} from 'react';
import NavHeader from '../components/nav';
import TopList from '../containers/top_list';
import AboutTop from '../components/aboutTop';

export default class Top extends Component {
    render() {
        return (
            <div>
                <NavHeader/>
                <AboutTop />
                <TopList />
            </div>

        )
    }
}
