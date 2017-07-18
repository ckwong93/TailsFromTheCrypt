import React, {Component} from 'react';
import {connect} from 'react-redux';

class RandomList extends Component{

  renderRandom(apiData){
    var name = apiData.Data.General.H1Text;
    var symbol = apiData.Data.General.ImageUrl;
    var logo = `https://www.cryptocompare.com/${symbol}`
    var description = apiData.Data.General.Description;
    // var updated_description = description.replace("(?i)<p[^>]*>", " ").replace("\\s+", " ").trim();
    var updated_description = $(description).text()

    return(
      <div>
        <center><h1 className="random-list-title">{name}</h1></center>
        <div className="random-data-container">
          <img src={logo} className="random-img" style={{"height": "150px", "width":"150px"}}></img><br></br>
          <div className="random-overview-text-list">{updated_description}</div>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div>
        <div>
          {this.props.random.map(this.renderRandom)}
        </div>
        <div>
          <center><h1 className="random-list-title">Bitcoin (BTC)</h1></center>
          <div className="random-data-container">
            <img src="../style/btc.png" className="random-img" style={{"height": "150px", "width":"150px"}}></img><br></br>
            <div className="random-overview-text-list">Bitcoin uses peer-to-peer technology to operate with no central authority
               or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Although
               other cryptocurrencies have come before, Bitcoin is the first decentralized cryptocurrency - Its reputation has
               spawned copies and evolution in the space.With the largest variety of markets and the biggest value - having reached
               a peak of 18 billion USD - Bitcoin is here to stay. As with any new invention, there can be improvements or flaws in the initial model
               however the community and a team of dedicated developers are pushing to overcome any obstacle they come across. It
               is also the most traded cryptocurrency and one of the main entry points for all the other cryptocurrencies. The price is as unstable as always and it can go up or down by 10%-20% in a single day.Bitcoin is an SHA-256 POW coin with 21,000,000 total minable coins. The block time is 10 minutes. See below for a full range of Bitcoin markets where you can trade US Dollars for Bitcoin, crypto to Bitcoin and many other fiat currencies too.</div>
          </div>
        </div>
      </div>

    )
  }
}

function mapStatetoProps({random}){
  return {random};
}

export default connect(mapStatetoProps)(RandomList);
