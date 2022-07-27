// import Form from 'antd/lib/form/Form';
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Home from '../pages/HomePage';
import { Button, Form, Input, Typography } from 'antd';
import { registerAPI } from '../api/auth';

const RegisterForm = ({ isLoginPage }) => {

    const { Text, Link, Title } = Typography;

    const { state, dispatch, handleLogin } = useContext(AppContext);

    // const notf = {
    //     success: 'Create account successful',
    //     error: 'Register failed'
    // };

    const [notf, setNotf] = useState({
        state: ""
    })

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
    });

    const handleRegister = async (e, userInfo) => {
        e.preventDefault();
        const { name, email, password, phone, address } = userInfo;
        const response = await registerAPI(userInfo);

        if (response.success === 'true') {
            console.log("success");
            setNotf({ ...notf, state: "Create account successful" });
        } else {
            console.log("failed");
            setNotf({ ...notf, state: "Register failed" });
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
                            <Title className='text-center my-5'>RegisterForm</Title>
                            <Form.Item
                                className='form-group'
                                name='name'
                                rules={[
                                    { required: true, message: 'Please input your name' }
                                ]}
                            >
                                <Input className='form-control' placeholder='Name' onChange={(e) => { setUserInfo({ ...userInfo, name: e.target.value }) }} />
                            </Form.Item>

                            <Form.Item
                                className='form-group'
                                name='email'
                                rules={[
                                    { required: true, type: 'email', message: 'Please input your email' }
                                ]}
                            >
                                <Input className='form-control' placeholder='Email' onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
                            </Form.Item>

                            <Form.Item
                                className='form-group'
                                name='password'
                                rules={[{ required: true, message: 'Please input your password' }]}
                            >
                                <Input.Password className='form-control' placeholder='Password' onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />
                            </Form.Item>

                            <Form.Item
                                className='form-group'
                                name='phone'
                                rules={[{ required: true, message: 'Please input your password' }]}
                            >
                                <Input className='form-control' placeholder='Phone 09....' onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} />
                            </Form.Item>

                            <Form.Item
                                className='form-group'
                                name='address'
                                rules={[{ required: true, message: 'Please input your password' }]}
                            >
                                <Input className='form-control' placeholder='VD: Ha Noi' onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })} />
                            </Form.Item>

                            <Form.Item className='text-center'>
                                <Text className='text-success d-block'>{notf.state}</Text>
                                <Button className='btn btn-primary' type='primary' onClick={(e) => handleRegister(e, userInfo)}>
                                    Register now!
                                </Button>

                                <Text className='d-block'>You have an account? <Link className='text-primary' onClick={() => isLoginPage(true)}>Log In</Link></Text>
                            </Form.Item>

                        </Form>
                    </div>

                )
            }

        </div>


    )
}
export default RegisterForm