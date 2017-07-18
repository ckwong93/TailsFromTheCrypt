import React, {Component} from 'react';
import NavHeader from '../components/nav';
import AboutRandom from '../components/aboutRandom';
import Randomize from '../containers/randomize';

export default class Random extends Component{
  render(){
    return(
      <div>
        <NavHeader />
        <AboutRandom />
        <Randomize />
      </div>
    )
  }
}
