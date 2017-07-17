import React, { Component } from 'react';
import sr from './scrollReveal.js'

export default class AboutTop extends Component {
    props: Props;

    componentDidMount = () => {
      const config_title = {
        origin: 'top',
        duration: 500,
        delay: 150,
        distance: '300px',
        scale: 1,
        easing: 'ease-out',
      };
      const config_slogan = {
        origin: 'left',
        duration: 500,
        delay: 150,
        distance: '300px',
        scale: 1,
        easing: 'ease-out',
      }

      sr.reveal('.popular-title', config_title)
      sr.reveal('.popular-slogan', config_slogan)

}
  render(){
    return(
      <div>
        <div className="popular-container">
          <h1 className="popular-title">Popular Cryptocurrencies</h1>
          <h3 className="popular-slogan">Market Captialization Frontrunners</h3>
        </div>
     </div>
    )
  }
}
