import React, {Component} from 'react';
import sr from './scrollReveal.js'


export default class AboutSearch extends Component{
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

    sr.reveal('.search-title', config_title)
    sr.reveal('.search-slogan', config_slogan)
    sr.reveal('.search-overview-title',{ move:0, duration:1000, scale: 1.5 }, 500)
    sr.reveal('.search-overview-text',{ move:0, duration:1000 }, 500)
    sr.reveal('.hr-line',{ move:0, duration:1000})



}

  render(){
    return(
      <div>
        <div className="search-container">
          <h1 className="search-title">Cryptocurrency Query</h1>
          <h3 className="search-slogan">Research Specific Coins</h3>
        </div>
        <div className="search-overview">
          <h1 className="search-overview-title">Introduction</h1>
          <p className="search-overview-text">Now that you've probably done a bit of research on all of the coins out there, you're ready to remove the training
            wheels and create your own personalized cryptocurrency portfolio. With a plethora of coins to choose from, there are endless combinations and
            strategies to make. Use this tool as a tracking device. That is, a general ledger used to query specific coins that you'd like to add to your porfolio.
        </p>
        <p className="search-overview-text"  style={{"padding-bottom":"10px", "padding-top":"0px"}}>
          This feature is relatively easy to use - simply enter the name of the coin (note: not the ticker) and query away! Here are a few search terms to get you started - Bitcoin, Ripple,
          Waves, Civic, Ethereum, Stratis. Now, lets get to searchin!
         </p>
        <p className="search-overview-text"  style={{"padding-bottom":"30px", "padding-top":"0px"}}>
          We encourage you to tinker around with this querying tool to explore the different options out there. What makes cryptocurrency exciting is the vast amount of resources
          available to learn about all of the coins out there. We hope you use this platform as a stepping stone towards your future success in alternative investments!
         </p>
         <hr className="hr-line"></hr>
        </div>
      </div>
    )
  }
}
