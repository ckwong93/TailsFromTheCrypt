import React, {Component} from 'react';
import API_ID_ARR from '../containers/api_array';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { randomCrypto } from '../actions/index';

class Randomize extends Component {
  constructor(props) {
      super(props);

      this.state = { item: "7605"
      // by default item is btc id
      };

      this.onButtonClick = this.onButtonClick.bind(this);

  }

  onButtonClick(event){
    event.preventDefault();
    console.log('button has been clicked');

    // sets item in state to random number in api id array
    this.setState({item: API_ID_ARR.API_ID_ARR[Math.floor(Math.random()*API_ID_ARR.API_ID_ARR.length)]});
    console.log(this.state.item);
    this.props.randomCrypto(this.state.item)


  }
  render(){
    return(
      <span className="input-group-btn">
          <center><button type="submit" className="btn btn-primary btn-large" style={{"background-color": "#0066FF"}} onClick={this.onButtonClick}>Randomize!</button></center>
      </span>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({randomCrypto}, dispatch);
}

export default connect(null, mapDispatchToProps)(Randomize)
