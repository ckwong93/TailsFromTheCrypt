import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class AboutBitcoin extends Component {

  render(){
    var btcImg = `http://www.canbike.org/public/images/030114/Bitcoin_Logo.png`;
    return (
      <div >
        <br></br><br></br>
        <div id="#about">
          <br></br>
          <center><h1 className="section-title" style={{'color': '#f5b730'}}>Bitcoin</h1></center>
          <div className="col-xs-6 col-md-4 margintop">
            <center><img className="btc-img img-rounded" src={btcImg}></img></center>
          </div>
          <div className="col-xs-12 col-md-8">
            <br></br>
            Ibitcoin bitcoin bitcoin<br></br>
          </div>
        </div>
      </div>
    )
  }
}
