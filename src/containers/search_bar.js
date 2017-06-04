import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event){
      this.setState({searchTerm: event.target.value})
      console.log(this.state.searchTerm)
    }

    render() {
        return (
            <form className="input-group">
                <input placeholder="Enter ticker symbol of desired Cryptocurrency"
                  className="form-control"
                  onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

export default SearchBar;
