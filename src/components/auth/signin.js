
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import Nav from '../nav';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    this.props.signinUser({ email, password});
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div>
        <Nav /><br></br>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Email:</label>
            <Field name="email" component="input" className="form-control" />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <Field name="password" component="input" className="form-control" />
          </fieldset>
          <button action="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>

    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, null, actions)(Signin);
