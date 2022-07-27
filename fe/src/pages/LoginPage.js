import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const LoginPage = () => {

    const [isLoginPage, setIsLoginPage] = useState(true);

    return (
        <div>
            {isLoginPage && <LoginForm isLoginPage={setIsLoginPage} />}
            {!isLoginPage && <RegisterForm isLoginPage={setIsLoginPage} />}
        </div>
    )
}

export default LoginPage
