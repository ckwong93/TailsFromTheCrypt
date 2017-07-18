import React, {Component} from 'react';
import sr from './scrollReveal.js';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class Outtro extends Component{
  props: Props;

    componentDidMount = () => {
      const config = {
        origin: 'right',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
  // scrollreveal function to animate about section + columns
      sr.reveal('.primer-title', config)
      sr.reveal('.primer-overview-text',{ move:0, duration:1000 }, 500)
    }
  render(){
    return(
      <div className="primer-div">
        <h1 className="primer-title">Site Features</h1>
        <div className="primer-overview">
            <p className="primer-overview-text">
              This site was made to be used as a resource for learning, tracking, and investing in cryptocurrencies. What we wanted to accomplish with this project
              is to provide interesting and easy-to-digest information to those that want to learn more about alternative investments. This project leverages both
              the CoinMarketCap API as well as the Cryptonator API, so special thanks to them for their awesome API access.
            </p>
            <p className="primer-overview-text">
              So far, we have a couple features on this website. The first feature - Top Crypto - allows users to view a list of the top 50 most popular cryptocurrencies.
              This is a useful tool to get an idea of which coins to follow, learn more about, or invest in. The second tool - Search Crypto - allows users to search for
              specific currencies. By doing so, users can specifically query altcoins that interest them. Now, enough talking...lets test out those features~
            </p>
            <br></br>
            <center>
              <Link to="/top"><Button className="custom-button grow-btn" bsStyle="warning" style={{'background-color': '#0088c8', 'border':'none'}}>Top Crypto</Button></Link>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Link to="/search"><Button className="custom-button grow-btn" bsStyle="primary" style={{'background-color': '#696969', 'border':'none'}}>Search Crypto</Button></Link>
             </center>
        </div>
        <hr className="hr-divider" style={{"margin-bottom": "0px"}}></hr>

      </div>
    )
  }
}
