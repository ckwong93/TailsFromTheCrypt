import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Nav from '../components/nav';


export default class AboutEth extends Component {

  render(){
    var ethImg = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/2000px-Ethereum_logo_2014.svg.png`;
    return (
      <div className="ethereum-page" style={{"height": "780px"}}>
        <Nav />
        <br></br>
        <div id="#about">
          <center><h1 className="section-title w3-animate-top" style={{'color': 'white', 'font-size': '60px'}}>Ethereum</h1></center><br></br>
          <div className="col-xs-12 col-md-8 ethereum-text">
            <h3 className="w3-animate-left">What is it?</h3>
            <p className="w3-animate-opacity">Ethereum is a  decentralized platform that runs smart contracts: applications that run exactly
              as programmed without any possibility of downtime, censorship, fraud or third party interference.
              Ethereum is run on a custom built blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property.
             </p><br></br>
             <h3 className="w3-animate-left">Advantages of Ethereum</h3>
             <ul className="w3-animate-opacity">
               <li>-No Taxes: Because Bitcoins are not regulated by a centralized government, there are no taxes </li>
               <li>-Anonymous: Bitcoins are anonymous, making buyers unindentifed and transactions untraceable</li>
               <li>-No Chargebacks: Unlike credit cards, transaction reversals do not exist </li>
             </ul><br></br>
             <hr/>
          </div>
          <div className="col-xs-6 col-md-4 margintop">
            <center><img className="eth-img img-rounded w3-animate-opacity w3-animate-zoom" src={ethImg}></img></center><br></br><br></br>
          </div>
        </div><hr></hr><br></br><br></br>
      </div>
    )
  }
}
