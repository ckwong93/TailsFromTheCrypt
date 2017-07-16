import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Icon} from 'react-fa';
import sr from './scrollReveal.js'

export default class About extends Component {
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
      sr.reveal('.about-container', config)
      sr.reveal('.about-col',{ duration: 1000 }, 200)
    }
  render(){
    var stockImg = `https://blockgeeks.com/wp-content/uploads/2017/04/bitcoin-exchange.jpg`;
    return (
      <div className="about-gradient">
        <h1 className="about-title">What Are Cryptocurrencies?</h1>

        <container className="about-container">
            <span className="about-text">
               In a nutshell, Cryptocurrencies are a new form of payments that can be used for transactions online. Unlike fiat currencies like Dollars and Euros,
               digital currencies are decentralized, anonymous, and instant. This means that these transactions have minimal fees, are untraceable, and transfer much faster than those of traditional currencies.
               <br></br><br></br>
              There are multiple reasons why these alternative currencies are disrupting the world. With a multitude of advantages and an ever-evolving ecosystem, now is the perfect time to
              dip your toes into cryptocurrency investment.
               <br></br><br></br><hr></hr>
            </span><br></br>
        </container>
        <container className="flex-container">
          <div className="item1 about-col"><center><Icon name="lock" size="5x" className="grow about-icon" refs="box"/><br></br><h4>Secure</h4><p className="column-text">
          Because each individual user has their own hashed address, it is secure and easy to send payment to others. There are also a wide variety of security
          measures such as hard wallets, e-wallets, and layered authentication. These layers of security protect coin holders from malicious attacks.
          </p></center></div>
          <div className="item2 about-col"><center><Icon name="exchange" size="5x" className="grow about-icon" refs="box"/><br></br><h4>Instant</h4><p className="column-text">All transactions via alt coins are sent instantly. There is no need to ever
            worry about waiting multiple days for money to be sent to and from these mediums. In fact, there are also alt coins that specifically focus on instant transactions with minimal fees (XRP).</p></center></div>
          <div className="item3 about-col"><center><Icon name="line-chart" size="5x" className="grow about-icon" refs="box"/><br></br><h4>Growth</h4><p className="column-text">A growing userbase means that there are new investors everyday. Money pooled into the alt coin industry is growing exponentially.
            What this means is that the value of our coins are growing at an alarming rate. Think stock market…but on steroids.</p></center></div>
        </container>
        <container className="flex-container2">
          <div className="item4 about-col"><center><Icon name="users" size="5x" className="grow about-icon" refs="box"/><br></br><h4>Community</h4><p className="column-text">Because alt coins are based on the internet, its online presence is extremely active. Sources like Reddit, Twitter, and Slack are great resources
            to chat with fellow investors about investment opportunities and strategies. Plus, most seasoned investors share all this information publicly!</p></center></div>
          <div className="item5 about-col"><center><Icon name="link" size="5x" className="grow about-icon" refs="box"/><br></br><h4>Blockchain</h4><p className="column-text">In essence, a distributed ledger technology, Blockchain allows altcoins to be decentralized.
          That is, there are no 3rd party middleman to rack up fees or taxes (aka government). This decentralisation is one of the revolutionary aspects of the technology.</p></center></div>
          <div className="item6 about-col"><center><Icon name="university" size="5x" className="grow about-icon" refs="box"/><br></br><h4>Accessibility</h4><p className="column-text">Since coins are online based, all you need to access your currencies is an internet connection. Long gone
          are the days of needing to drive to banking institutions. All coin transactions are sent and received over the web.</p></center></div>
        </container>
      </div>

    )
  }
}

{/*
  The purpose of this site is to provide users with a simple and easy-to-understand resource for cryptocurrency and
  altcoins investment. Think of this as a starter kit towards jumpstarting your altcoin portfolio! Let's begin with a quick introduction
  to two of the most popular coins, Bitcoin and Ethereum.
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
