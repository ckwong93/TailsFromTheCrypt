import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Nav from '../components/nav';
import sr from './scrollReveal.js'


export default class AboutEth extends Component {
  props: Props;

    componentDidMount = () => {
      const config_eth_title = {
        origin: 'top',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      };
      const config_eth_text = {
        origin: 'right',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
      const config_eth_img = {
        origin: 'bottom',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
  // scrollreveal function to animate about section + columns
      sr.reveal('.eth-title', config_eth_title)
      sr.reveal('.ethereum-text', config_eth_text)
      sr.reveal('.eth-img', config_eth_img)
}
  render(){
    var ethImg = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/2000px-Ethereum_logo_2014.svg.png`;
    return (
      // <div className="ethereum-page" style={{"height": "450px"}}>
      //   <Nav />
      //   <br></br>
      //   <div id="#about">
      //     <center><h1 className="section-title eth-title" style={{'color': 'white', 'font-size': '60px'}}>Ethereum</h1></center><br></br>
      //     <div className="col-xs-6 col-md-4">
      //       <center><img className="eth-img img-rounded" src={ethImg}></img></center>
      //     </div>
      //     <div className="col-xs-12 col-md-8 ethereum-text">
      //       <h3 className="roboto">What is it?</h3>
      //       <p>Ethereum is a  decentralized platform that runs smart contracts: applications that run exactly
      //         as programmed without any possibility of downtime, censorship, fraud or third party interference.
      //         Ethereum is run on a custom built blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property.
      //        </p><br></br>
      //        {/* <h3 className="roboto">Advantages of Ethereum</h3>
      //        <ul >
      //          <li>-No Taxes: Because Bitcoins are not regulated by a centralized government, there are no taxes </li>
      //          <li>-Anonymous: Bitcoins are anonymous, making buyers unindentifed and transactions untraceable</li>
      //          <li>-No Chargebacks: Unlike credit cards, transaction reversals do not exist </li>
      //        </ul><br></br>
      //        <hr/> */}
      //     </div>
      //   </div>
      // </div>

      <div>
        <div className="ethinfo-container">
          {/* <h1 className="bitcoininfo-title">Bitcoin</h1> */}
        </div>
     </div>
    )
  }
}
