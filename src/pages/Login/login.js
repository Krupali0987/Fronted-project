import React from 'react';
import LoginHeader from './components/loginHeader';
import LoginForm from './components/loginForm';
import './login.scss';

const Login = () => {
    return (
        <div className="container  m-auto">
            <div>
                <LoginHeader />
            </div>
            <div>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
