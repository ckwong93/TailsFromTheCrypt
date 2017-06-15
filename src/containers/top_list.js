import React, { Component, Image } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { topCrypto } from '../actions';
import _ from 'lodash';
import Nav from '../components/nav';

class TopList extends Component {
  componentWillMount(){
    this.props.topCrypto();
  }
  topCoin(top){
    console.log('top props arr', this.props.top[0]);
    if (!top[0]){
      return (
        <tr></tr>
      )
    }
    var list = [];
    for (var i = 0; i < top[0].length; i++){
      var lowercase = top[0][i].id.toLowerCase();
      var logo = `https://files.coinmarketcap.com/static/img/coins/64x64/${lowercase}.png`
      list.push(
      <tr key={top[0][i].id}>
        <td>{parseInt([i])+1}</td>
        <td><img src={logo}></img></td>
        <td>{top[0][i].name}</td>
        <td>{top[0][i].symbol}</td>
        <td>${top[0][i].price_usd}</td>
        { top[0][i].percent_change_24h > 0 ?
          (<td style={{color: 'green'}}>{top[0][i].percent_change_24h}%</td>)
          :
          (<td style={{color: 'red'}}>{top[0][i].percent_change_24h}%</td>)}
      </tr>

    )
    }
    return list;
  }
  render(){
    return(
      <div>
        <Nav />
        
        <h1 className="top-title">Popular Cryptocurrencies</h1><br></br>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Ticker</th>
              <th>USD Price</th>
              <th>24HR Change</th>
            </tr>
          </thead>
          <tbody>
            {this.topCoin(this.props.top)}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStatetoProps({top}){
  return { top };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({topCrypto}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(TopList);
