import React, { Component, Image } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { topCrypto } from '../actions';
import _ from 'lodash';


class TopList extends Component {
  componentDidMount(){
    this.props.topCrypto();
    console.log(this.props.top.Data)

  }

  findCoin(top){
    // const list = _.sortBy(top.Data, 'SortOrder');
    // console.log('list of crypto by rank',list),
    return (
      <div key={top.Data.BTC.id}>
        <h1>{top.Data.BTC.CoinName}</h1>
        <img src={`http://www.cryptocompare.com/${top.Data.BTC.ImageUrl}`}></img>
        <h2>{top.Data.BTC.Id}</h2>
      </div>
    )
  }
  render(){
    return(
      <div>
        {this.props.top.map(this.findCoin)}
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
