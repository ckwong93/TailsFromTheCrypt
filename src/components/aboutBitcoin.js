import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class AboutBitcoin extends Component {

  render(){
    var btcImg = `http://www.canbike.org/public/images/030114/Bitcoin_Logo.png`;
    return (
      <div >
        <br></br>
        <div id="#about">
          <center><h1 className="section-title" style={{'color': '#f5b730'}}>Bitcoin</h1></center><br></br>
          <div className="col-xs-12 col-md-8">
            <h5>What is it?</h5>
            <p>Bitcoin is a form of digital currency, created and held electronically. No one controls it. Bitcoins aren't printed, like dollars or euros – they're produced by people,
               and increasingly businesses, running computers all around the world, using software that solves mathematical problems. Bitcoins are mined (or created) over time,
               just like how fiat currencies are printed. However, this process is done over the web using computing power. <br></br>
             </p><br></br>
             <h5>Advantages of Bitcoin</h5>
             <ul>
               <li>-No Taxes: Because Bitcoins are not regulated by a centralized government, there are no taxes necessary</li>
               <li>-Anonymous: Bitcoins are anonymous, allowing buyers and sellers to remain unindentifed and untraceable</li>
               <li>-No Chargebacks: Unlike credit cards, transaction reversals do not exist </li>
             </ul><br></br><br></br><br></br>
             <hr/>
          </div>
          <div className="col-xs-6 col-md-4 margintop">
            <center><img className="btc-img img-rounded" src={btcImg}></img></center>
          </div>
        </div><hr></hr>
      </div>
    )
  }
}
