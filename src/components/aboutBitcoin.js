import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Nav from '../components/nav';
import sr from './scrollReveal.js'

export default class AboutBitcoin extends Component {
  props: Props;

    componentDidMount = () => {
      const config_btc_title = {
        origin: 'top',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      };
      const config_btc_text = {
        origin: 'right',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
      const config_btc_img = {
        origin: 'bottom',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
  // scrollreveal function to animate about section + columns
      sr.reveal('.btc-title', config_btc_title)
      sr.reveal('.bitcoin-text', config_btc_text)
      sr.reveal('.btc-img', config_btc_img)
}
  render(){
    var btcImg = `http://www.canbike.org/public/images/030114/Bitcoin_Logo.png`;
    return (
      <div className="bitcoin-page" style={{"height": "400px"}}>
        <Nav />
        <br></br>
        <div id="#about">
          <center><h1 className="section-title btc-title" style={{'color': 'black', 'font-size': '60px'}}>Bitcoin</h1></center><br></br>
          <div className="col-xs-12 col-md-8 bitcoin-text">
            <h3 className="roboto">What is it?</h3>
            <p >Bitcoin is a form of digital currency, created and held electronically. No one controls it. Bitcoins aren't printed, like dollars or euros – they're produced by people,
               and increasingly businesses, running computers all around the world, using software that solves mathematical problems. Bitcoins are mined (or created) over time,
               just like how fiat currencies are printed. However, this process is done over the web using computing power. <br></br>
             </p><br></br>
             {/* <h3 className="roboto">Advantages of Bitcoin</h3>
             <ul>
               <li>-No Taxes: Because Bitcoins are not regulated by a centralized government, there are no taxes </li>
               <li>-Anonymous: Bitcoins are anonymous, making buyers unindentifed and transactions untraceable</li>
               <li>-No Chargebacks: Unlike credit cards, transaction reversals do not exist </li>
             </ul><br></br>
             <hr/> */}
          </div>
          <div className="col-xs-6 col-md-4">
            <center><img className="btc-img img-rounded btc-img" src={btcImg}></img></center>
          </div>
        </div>
      </div>
    )
  }
}
