import React, {Component} from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';

class CryptoList extends Component {
    renderCrypto(cryptoData) {
        var name = cryptoData[0].name;
        var price = '$' + parseFloat(cryptoData[0].price_usd).toFixed(2);
        var change = cryptoData[0].percent_change_24h;
        var lowercase = cryptoData[0].id.toLowerCase();
        var symbol= cryptoData[0].symbol;
        var logo = `https://files.coinmarketcap.com/static/img/coins/64x64/${lowercase}.png`
        return (
            <tr key={name}>
                <td>
                    <img src={logo}></img>
                </td>
                <td>{name}</td>
                <td>{symbol}</td>
                <td>{price}</td>
                {change > 0
                    ? (
                        <td style={{
                            color: 'green'
                        }}>{change}</td>
                    )
                    : (
                        <td style={{
                            color: 'red'
                        }}>{change}</td>
                    )}
            </tr>
        )

    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Ticker</th>
                        <th>USD Price</th>
                        <th>24HR Change</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.crypto.map(this.renderCrypto)}
                </tbody>
            </table>
        )
    }
}

function mapStatetoProps({crypto}) {
    return {crypto};
}

export default connect(mapStatetoProps)(CryptoList);
