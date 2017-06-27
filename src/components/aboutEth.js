import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class AboutEth extends Component {

  render(){
    var ethImg = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/2000px-Ethereum_logo_2014.svg.png`;
    return (
      <div >
        <br></br><br></br>
        <div id="#about">
          <br></br>
          <div className="col-xs-12 col-md-8">
            <br></br>
            ether ether ether<br></br>
          </div>
          <center><h1 className="section-title" style={{'color': '#f5b730'}}>Ether</h1></center>
          <div className="col-xs-6 col-md-4 margintop">
            <center><img className="btc-img img-rounded" src={ethImg}></img></center>
          </div>
        </div>
      </div>
    )
  }
}
