import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCrypto } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange(event){
      this.setState({searchTerm: event.target.value})
      // console.log(this.state.searchTerm)
    }

    onFormSubmit(event){
      event.preventDefault();
      this.props.fetchCrypto(this.state.searchTerm);
      this.setState({searchTerm: ''})
    }

    render() {
        return (
          <div>
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Enter ticker symbol of desired Cryptocurrency"
                  className="form-control"
                  onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form><br></br><br></br>
          </div>

        )
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCrypto}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
