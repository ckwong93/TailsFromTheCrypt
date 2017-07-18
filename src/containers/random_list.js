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
        <h1 className="random-list-title">{name}</h1>
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
          {this.props.random.map(this.renderRandom)}
        </div>
    )
  }
}

function mapStatetoProps({random}){
  return {random};
}

export default connect(mapStatetoProps)(RandomList);
