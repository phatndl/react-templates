import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './login.action';

const Login = class _Login extends Component {
  static defaultProps = {
    loading: false,
    error: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { phone, password } = this.state;
    this.props.login({ phone, password });
  };

  onChange = e => {
    var { target } = e;
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { loading, error, token } = this.props;
    return (
      <div>
        <div>Status: {loading ? 'LOADING....' : ''} </div>
        <div>Authen: {token ? 'OK' : 'CONFIRMING....'} </div>
        <div>Error: {error ? error.message : ''} </div>
        <form onSubmit={this.onSubmit}>
          <label>Phone: </label>
          <input type='text' name='phone' onChange={this.onChange} />

          <label>Password: </label>
          <input type='password' name='password' onChange={this.onChange} />

          <button type='submit'>Đăng nhập</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log('state: ', state);
  return {
    loading: state.loginReducer.loading,
    error: state.loginReducer.error,
    data: state.loginReducer.data,
  };
};

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
