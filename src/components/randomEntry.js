import React, {Component} from 'react';
import NavHeader from '../components/nav';
import AboutRandom from '../components/aboutRandom';
import Randomize from '../containers/randomize';
import RandomList from '../containers/random_list';


export default class Random extends Component{
  render(){
    return(
      <div>
        <NavHeader />
        <AboutRandom />
        <Randomize />
        <RandomList />
      </div>
    )
  }
}
