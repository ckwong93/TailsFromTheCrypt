import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class About extends Component {

  render(){
    var stockImg = `https://blockgeeks.com/wp-content/uploads/2017/04/bitcoin-exchange.jpg`;
    return (
      <section>
          <h1 className="section-title">What are Cryptocurrencies?</h1>
          <span className="col-xs-6 col-md-4 margintop">
            <center><img className="about-img img-rounded" src={stockImg}></img></center>
          </span>
          <span className="col-xs-12 col-md-8">
            <blockquote>
              Cryptocurrencies are digital assets designed to work as mediums of exchange using cryptography to secure the transactions and to control the creation of additional units of the currency.
              Cryptocurrencies are a subset of alternative currencies, or specifically of digital currencies. - Wikipedia
            </blockquote>
             <br></br>
             <h5>What does that even mean?</h5>
             In a nutshell, Cryptocurrencies are a new form of payments that can be used for transactions online. Unlike fiat currencies like Dollars and Euros,
             digital currencies are decentralized, anonymous, and instant. Without going too much further in detail, this means that these transactions
             have minimal fees, are untraceable, and transfer much faster than those of traditional currencies.<br></br><br></br>

             The purpose of this site is to provide users with a simple and easy-to-understand resource for cryptocurrency and
             altcoins investment. Think of this as a starter kit towards jumpstarting your altcoin portfolio! Let's begin with a quick introduction
             to two of the most popular coins, Bitcoin and Ethereum.
            <center>
              <Link to="/bitcoin"><Button className="custom-button" bsStyle="warning" style={{'background-color': '#f5b730', 'border':'none'}}>Bitcoin</Button></Link>
                &nbsp; &nbsp;
               <Link to="/ethereum"><Button className="custom-button" bsStyle="primary" style={{'background-color': '#4b4b4b', 'border':'none'}}>Ethereum</Button></Link>
             </center>
             <hr/>
          </span>
      </section>
    )
  }
}
