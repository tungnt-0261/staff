import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { Button, Form, Input, Typography } from 'antd'
// import 'antd/dist/antd.css'
import Home from '../pages/HomePage';
import { loginAPI } from '../api/auth';
// import { Link } from 'react-router-dom';

const LoginForm = ({ isLoginPage }) => {

    const { Text, Link, Title } = Typography;

    const { state, handleLogout, dispatch } = useContext(AppContext);

    const { isRedirect, setRedirect } = useState(
        { isLoading: false }
    );

    const handleLogin = async (e) => {

        e.preventDefault();

        const loginData = {
            email: state.email,
            password: state.password
        }

        const response = await loginAPI(loginData);

        if (response.success === 'true') {
            dispatch({ type: "success" });
            // setRedirect(true);
        }
        else {
            dispatch({ type: "error" });
            // setRedirect(true)
        }
    }

    const handleRedirect = () => {
        if (isRedirect.isLoading) {
            return "Redirect.......";
        }
    }

    return (
        <div>
            {
                state.logged ? (
                    <Home />
                ) : (
                    <div className='card' style={{ marginTop: '100px', width: 500, marginLeft: '400px' }}>
                        <Form
                            name='loginForm'
                            className='card-body'
                        >
                            <Title className='text-center mt-5'>LoginForm</Title>
                            <Form.Item
                                className='mt-5'
                                name='email'
                                rules={[
                                    { required: true, type: 'email', message: 'Please input your email' }
                                ]}
                            >
                                <Input className='form-control' placeholder='Email' onChange={(e) => dispatch({ type: 'email', value: e.target.value })} />
                            </Form.Item>

                            <Form.Item
                                className='form-group'
                                name='password'
                                rules={[{ required: true, message: 'Please input your password' }]}
                            >
                                <Input.Password className='form-control' placeholder='Password' onChange={(e) => dispatch({ type: 'password', value: e.target.value })} />
                            </Form.Item>

                            <Form.Item
                                className='mt-3 text-center'
                            >
                                <Text className='text-danger d-block'>{state.error}</Text>
                                <Button className='btn btn-primary' type='primary' onClick={handleLogin}>
                                    Log In
                                </Button>
                                <Text className='d-block'>You don't have an account? <Link className='text-primary' onClick={() => isLoginPage(false)}>Register</Link></Text>
                            </Form.Item>
                            
                        </Form>
                    </div>

                )
            }

        </div>

    )
}

export default LoginForm