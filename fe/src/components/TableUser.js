import React from 'react'
import { Space, Table, Tag, Button } from 'antd';
import { useState, useEffect } from 'react';
import axios from '../api/axios';



const TableUser = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        axios.get('/users').then(res => {
            setUsers(res.data);
        })
    }


    const deleteUser = (id) => {
        axios.delete('/users/' + id).then(res => {
            fetchAllUsers();
        })
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
        },
    ];

    const data = users.map((user, index) => {
        return {
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            role: user.role,
            action: [
                <Button className='mr-3' type="primary" danger onClick={() => { deleteUser(user.id) }}>Delete</Button>,
                <Button type="primary">Update</Button>,
                // <Button>View</Button>
            ]
        }
    })

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default TableUser