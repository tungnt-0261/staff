import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { Button, Space, Table, Tag } from 'antd';
import axios from '../api/axios';
import TableUser from '../components/TableUser';
import 'antd/dist/antd.css';
import Navbar from '../components/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import CreateForm from '../components/CreateForm';


const Home = () => {

    const { handleLogout, list } = useContext(AppContext);

    return (

        <div>
            <Navbar />
            <Button className='float-right' onClick={handleLogout}>log out</Button>
            <div>
                <h2 className='my-5 text-center'>Staff Management</h2>
            </div>
            <TableUser />
            
        </div>

    )
}

export default Home