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
      sr.reveal('.popular-overview-title',{ move:0, duration:1000, scale: 1.5 }, 500)
      sr.reveal('.popular-overview-text',{ move:0, duration:1000 }, 500)
      sr.reveal('.hr-line',{ move:0, duration:1000, delay: 1000 })



}
  render(){
    return(
      <div>
        <div className="popular-container">
          <h1 className="popular-title">Popular Cryptocurrencies</h1>
          <h3 className="popular-slogan">Market Captialization Frontrunners</h3>
        </div>
        <div className="popular-overview">
          <h1 className="popular-overview-title">Overview</h1>
          <p className="popular-overview-text">With thousands of cryptocurrencies in the market, it's easy to get lost figuring out which coins
          to research or invest in. That's why we created this list of the most popular cryptocurrencies.
          Here, you'll find twenty of the most active coins. Although Bitcoin and Ethereum tend to stay firm as
          number 1 and 2, the rest of the list changes pretty regularly, so make sure to check out this page often!
        </p>
        <p className="popular-overview-text"  style={{"padding-bottom":"30px", "padding-top":"10px"}}>
          We've also included a few important details about each of the currencies listed here. Leveraging the CoinMarketCap API, we've been able to extract up-to-date info
          that will make investing in these coins a breeze! With the ticker, price, and 24HR change, you'll get a
          quick snapshot of the coin's performance relative to its competition.
         </p>
         <hr className="hr-line"></hr>
        </div>
     </div>
    )
  }
}
