import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class About extends Component {

  render(){
    var stockImg = `https://blockgeeks.com/wp-content/uploads/2017/04/bitcoin-exchange.jpg`;
    return (
      <div>
        <div id="#about">
          <br></br><br></br>
          <center><h1 className="section-title">What are Cryptocurrencies?</h1></center>
          <div className="col-xs-6 col-md-4 margintop">
            <center><img className="about-img img-rounded" src={stockImg}></img></center>
          </div>
          <div className="col-xs-12 col-md-8">
            <blockquote>
              "Cryptocurrencies are digital assets designed to work as mediums of exchange using cryptography to secure the transactions and to control the creation of additional units of the currency.
              Cryptocurrencies are a subset of alternative currencies, or specifically of digital currencies." - Wikipedia
            </blockquote>
             <br></br>
             <h5>What does that even mean?</h5><br></br>
             In a nutshell, Cryptocurrencies are a new form of payments that can be used for transactions online. Unlike fiat currencies like Dollars and Euros,
             digital currencies are decentralized, anonymous, and instant. Without going too much further in detail, this means that these transactions
             have less fees, are untraceable, and transfer much faster than those of traditional currencies.<br></br><br></br>

             Bitcoin and Ethereum are great examples of cryptocurrencies. The purpose of this site is to provide users with a simple and easy-to-understand
             resource for cryptocurrency and altcoins investment. Think of this as a starter kit towards jumpstarting your altcoin portfolio!<br></br>
             <br></br><center>
               <Button className="custom-button" bsStyle="warning" style={{'background-color': '#f5b730', 'border':'none'}}>Bitcoin</Button> &nbsp; &nbsp;
               <Button className="custom-button" bsStyle="primary" style={{'background-color': '#4b4b4b', 'border':'none'}}>Ethereum</Button>
             </center><br></br><br></br>
          </div>
        </div>
      </div>
    )
  }
}
