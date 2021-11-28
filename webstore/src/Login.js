import React, {useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                    alt="logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className='login__signInButton'>Sign In</button>

                </form>
                <p>
                    By signing-in you agree to conditions of Use&Sale. Please see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads.
                </p>
                <button className='login__registerButton'>Sign Up</button>
            </div>

        </div>
    );
}

export default Login;
