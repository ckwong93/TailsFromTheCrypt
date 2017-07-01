import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Nav from '../components/nav';

export default class AboutBitcoin extends Component {

  render(){
    var btcImg = `http://www.canbike.org/public/images/030114/Bitcoin_Logo.png`;
    return (
      <div className="bitcoin-page" style={{"height": "780px"}}>
        <Nav />
        <br></br>
        <div id="#about">
          <center><h1 className="section-title w3-animate-top" style={{'color': 'black', 'font-size': '60px'}}>Bitcoin</h1></center><br></br>
          <div className="col-xs-12 col-md-8 bitcoin-text">
            <h3 className="w3-animate-left">What is it?</h3>
            <p className="w3-animate-opacity">Bitcoin is a form of digital currency, created and held electronically. No one controls it. Bitcoins aren't printed, like dollars or euros – they're produced by people,
               and increasingly businesses, running computers all around the world, using software that solves mathematical problems. Bitcoins are mined (or created) over time,
               just like how fiat currencies are printed. However, this process is done over the web using computing power. <br></br>
             </p><br></br>
             <h3 className="w3-animate-left">Advantages of Bitcoin</h3>
             <ul className="w3-animate-opacity">
               <li>-No Taxes: Because Bitcoins are not regulated by a centralized government, there are no taxes </li>
               <li>-Anonymous: Bitcoins are anonymous, making buyers unindentifed and transactions untraceable</li>
               <li>-No Chargebacks: Unlike credit cards, transaction reversals do not exist </li>
             </ul><br></br>
             <hr/>
          </div>
          <div className="col-xs-6 col-md-4 margintop">
            <center><img className="btc-img img-rounded w3-animate-opacity w3-animate-zoom" src={btcImg}></img></center><br></br><br></br>
          </div>
        </div><hr></hr><br></br><br></br>
      </div>
    )
  }
}
