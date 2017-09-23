import React, {Component} from 'react';
import sr from './scrollReveal.js'


export default class AboutRandom extends Component{
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

    sr.reveal('.random-title', config_title)
    sr.reveal('.random-slogan', config_slogan)
    sr.reveal('.random-overview-title',{ move:0, duration:1000, scale: 1.5 }, 500)
    sr.reveal('.random-overview-text',{ move:0, duration:1000 }, 500)
    sr.reveal('.hr-line',{ move:0, duration:1000})



}

  render(){
    return(
      <div>
        <div className="random-container">
          <h1 className="random-title">Randomized Learning Tool</h1>
          <h3 className="random-slogan">Crytpo Speed Read</h3>
        </div>
        <div className="random-overview">
          <h1 className="search-overview-title">Expand your Portfolio</h1>
          
          <p className="random-overview-text">After getting your feet wet learning about all the different altcoins there are out there, it might be a little intimidating
            figuring out which are worth learning and follwing. Furthermore, the explanations of many of these coins are often confusing and hard to understand. One disadvantage
            of cryptocurrencies is that the terminology is so dense and scattered, many people end up investing without truly knowing what product they're putting money into.
        </p>
        <p className="random-overview-text"  style={{"padding-bottom":"10px", "padding-top":"0px"}}>
            Uninformed investing is bad investing. Learn more about coins today using this new feature. Clicking the button will return a random cryptocurrency along with some
            basic information about it. Although there isn't any trade information like price, change, and gain/loss, this information will give you some text based
            facts an descriptions about the coin.
         </p>
        <p className="random-overview-text"  style={{"padding-bottom":"30px", "padding-top":"0px"}}>
            We are hoping that you use this information as a primer to researching. What we mean by that is that after reading a quick description about the coin, if it interests
            you, go ahead and dive a little deeper. That way, you wont waste any time looking into coins that dont pique any of your interests.
         </p>
         <hr className="hr-line"></hr>
        </div>
      </div>
    )
  }
}
