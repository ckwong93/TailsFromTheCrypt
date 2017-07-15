import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Icon} from 'react-fa';


export default class About extends Component {

  render(){
    var stockImg = `https://blockgeeks.com/wp-content/uploads/2017/04/bitcoin-exchange.jpg`;
    return (
      <div className="about-gradient">
        <h1 className="about-title">What are Cryptocurrencies?</h1>

        <container className="about-container">
            <span className="about-text">
               In a nutshell, Cryptocurrencies are a new form of payments that can be used for transactions online. Unlike fiat currencies like Dollars and Euros,
               digital currencies are decentralized, anonymous, and instant. This means that these transactions have minimal fees, are untraceable, and transfer much faster than those of traditional currencies. The purpose of this site is to provide users with a simple and easy-to-understand resource for cryptocurrency and
               altcoins investment. Think of this as a starter kit towards jumpstarting your altcoin portfolio! Let's begin with a quick introduction
               to two of the most popular coins, Bitcoin and Ethereum.<br></br><br></br>
            </span><br></br>
        </container>
        <div className="col-md-4"><center><Icon name="spinner" size="5x"/><br></br>asdfasdfasdf is asdfasdfasdf is asdfasdfasdf</center></div>
        <div className="col-md-4"><center><Icon name="facebook" size="5x"/>/><br></br>sdfasdfasdf is asdfasdfasdf is asdfasdfasdfsdfasdfasdf is asdfasdfasdf is asdfasdfasdf</center></div>
        <div className="col-md-4"><center><Icon name="google" size="5x"/>/><br></br>sdfasdfasdf is asdfasdfasdf is asdfasdfasdfsdfasdfasdf is asdfasdfasdf is asdfasdfasdf</center></div>
        <div className="col-md-4"><center><Icon name="spinner" size="5x"/>/><br></br>sdfasdfasdf is asdfasdfasdf is asdfasdfasdfsdfasdfasdf is asdfasdfasdf is asdfasdfasdf</center></div>
        <div className="col-md-4"><center><Icon name="facebook" size="5x"/>/><br></br>sdfasdfasdf is asdfasdfasdf is asdfasdfasdfsdfasdfasdf is asdfasdfasdf is asdfasdfasdf</center></div>
        <div className="col-md-4"><center><Icon name="google" size="5x"/>/><br></br>sdfasdfasdf is asdfasdfasdf is asdfasdfasdfsdfasdfasdf is asdfasdfasdf is asdfasdfasdf</center></div>

      </div>

    )
  }
}

{/*
               Most altcoins are either Bitcoin or Ethereum based. What this means is that they are built using the same technologies as their base,
               but provide unique services. Each individual altcoin provides a special service or interaction. For example, Golems provides supercomputing processing power,
               Ripple provides instantaneous bank transactions, and Civic provides Identity Verification and Protection. With thousands of altcoins out there,
               it's easy to get confused and lost. What we're trying to build here is a platform to learn, track, and understand some of these awesome altcoins!<br></br><br></br>
              <center>
                <Link to="/bitcoin"><Button className="custom-button" bsStyle="warning" style={{'background-color': '#f5b730', 'border':'none'}}>Bitcoin</Button></Link>
                  &nbsp; &nbsp;
                 <Link to="/ethereum"><Button className="custom-button" bsStyle="primary" style={{'background-color': '#4b4b4b', 'border':'none'}}>Ethereum</Button></Link>
               </center>
               <hr/> */}

{/* <div>
  <h1 className="section-title">What are Cryptocurrencies?</h1>
  <container className="about-container">
      <span className="about-image margintop">
        <center><img className="about-img img-rounded" src={stockImg}></img></center>
      </span>
      <span className="about-text">
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
  </container>
</div> */}
