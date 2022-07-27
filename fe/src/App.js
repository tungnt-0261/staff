

import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateForm from './components/CreateForm';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import LoginPage from './pages/LoginPage';

const App = () => {


  return (
    // 
    
    <div>
      
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/create' element={<CreateForm />} />
      </Routes>
    </div>
  );
};

export default App;
