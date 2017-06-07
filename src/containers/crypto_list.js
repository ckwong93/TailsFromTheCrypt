import React, { Component } from 'react';
import { connect } from 'react-redux';

class CryptoList extends Component {
  renderCrypto(cryptoData){
    return (
      <tr>
        <td>{cryptoData.ticker.base}</td>
        <td>{cryptoData.ticker.price}</td>
        <td>{cryptoData.ticker.change}</td>
      </tr>
    )
    // const name = cryptoData;
    // console.log(this.props.crypto);
    // console.log(this.props.crypto.ticker);
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Price in USD</th>
            <th>24 HR Change</th>
          </tr>
        </thead>
        <tbody>
          {this.props.crypto.map(this.renderCrypto)}
        </tbody>
      </table>
    )
  }
}

function mapStatetoProps({crypto}){
  return { crypto };
}

export default connect(mapStatetoProps)(CryptoList);
