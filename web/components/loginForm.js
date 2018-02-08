import React from 'react';
import { Field } from 'redux-form';
import reactLogo from '../logo.svg'

export default ({ loginValues, login, loginResult }) => {
    const { status, message, loginPending } = loginResult;
    return (
    <div className='whiteFrame'>
        <div className="center item">
            { loginPending ? 
            <img className="pic logo-spin" src={reactLogo} width='180px' alt="React" />
            : <img className="pic" src={reactLogo} width='180px' alt="React" />}
        </div>
        <div>
            <label className='text'>Email address</label>
            <div>
                <Field
                name="email"
                component="input"
                type="email"
                placeholder="example@appman.co.th"
                />
            </div>
        </div>
        <div>
            <label className='text'>Password</label>
            <div>
                <Field
                name="password"
                component="input"
                type="password"
                placeholder="your password..."
                />
            </div>
        </div>
        {status !== 200 && !loginPending && message ? <div className='text error'>{message}</div> : null}
        <div className="center item">
            <button type="submit" className="buttonSignIn" onClick={() => login(loginValues)}>SIGN IN</button>
        </div>
        <div className="text-left"><a>Forgot password ?</a></div>
        <div className="text-right"><a>Create a new account</a></div>
    </div>);
}