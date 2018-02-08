import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValues, formValueSelector } from 'redux-form';
import { login } from '../lib/handlers/login'
import LoginForm from './loginForm'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { loginValues, loginResult } = this.props
    return (
        <div className='center'>
            <LoginForm loginValues={loginValues} login={login} loginResult={loginResult}/>
        </div>
    );
  }
}

Login = reduxForm({
    form: 'login'
})(Login)

const selector = formValueSelector('login')

const mapStateToProps = state => ({
    loginValues : selector(state,'email', 'password'),
    loginResult : state.login ? state.login : null
})

export default connect(mapStateToProps, null)(Login);