import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

class CryptoList extends Component {
  renderCrypto(cryptoData){
    var name = cryptoData.ticker.base;
    var price = '$' + parseFloat(cryptoData.ticker.price).toFixed(2);
    var percentage = (cryptoData.ticker.change * 100).toFixed(2);
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        {percentage > 0 ? (<td style={{color: 'green'}}>{percentage}%</td>) : (<td style={{color: 'red'}}>{percentage}%</td>)}
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
            <th>1 HR Change</th>
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
