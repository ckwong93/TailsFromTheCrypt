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

  topCoin(top){
    // const list = _.sortBy(top.Data, 'SortOrder');
    // console.log('list of crypto by rank',list),
    console.log('top 10', top)
    // var lowercase = top[0].name.toLowerCase();
    // var logo = `https://files.coinmarketcap.com/static/img/coins/64x64/${lowercase}.png`
    // return (
    //   <tr>
    //     <td><img src={logo}></img></td>
    //     <td>{top[0].name}</td>
    //     <td>{top[0].symbol}</td>
    //     <td>${top[0].price_usd}</td>
    //     <td>{top[0].percent_change_24h}%</td>
    //     {/* <td>{price}</td>
    //     {percentage > 0 ? (<td style={{color: 'green'}}>{percentage}%</td>) : (<td style={{color: 'red'}}>{percentage}%</td>)} */}
    //   </tr>
    // )

    for (var i = 0; i < top.length; i++){
      var lowercase = top[i].name.toLowerCase();
      var logo = `https://files.coinmarketcap.com/static/img/coins/64x64/${lowercase}.png`
      return (
        <tr>
          <td><img src={logo}></img></td>
          <td>{top[i].name}</td>
          <td>{top[i].symbol}</td>
          <td>${top[i].price_usd}</td>
          <td>{top[i].percent_change_24h}%</td>
        </tr>
      )
    }
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price in USD</th>
            <th>24 HR Change</th>
          </tr>
        </thead>
        <tbody>
          {this.props.top.map(this.topCoin)}
        </tbody>
      </table>
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
