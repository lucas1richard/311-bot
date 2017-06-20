import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { login } from '../../redux/reducers/user';

class LogInForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
    if (Object.keys(props.user).length) {
      browserHistory.push('/');
    }
  }

  componentWillReceiveProps(newProps) {
    if (Object.keys(newProps.user).length) {
      browserHistory.push('/');
    }
  }

  changeEmail(ev) {
    this.setState({ email: ev.target.value });
  }

  changePassword(ev) {
    this.setState({ password: ev.target.value });
  }

  submitForm(ev) {
    ev.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    return (
      <div className="container">
        <h1>Log-In</h1>
        <form onSubmit={ this.submitForm }>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={ this.state.email }
              onChange={ this.changeEmail }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              value={ this.state.password }
              onChange={ this.changePassword }
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
      );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
