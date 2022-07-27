import React, { useState } from "react";
import "antd/dist/antd.css";
// import "./index.css";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import CreateForm from "./CreateForm";

const items = [
    {
        label: "Home",
        key: "home"
    },
    {
        label: (
            <Link to={"/create"} >Create</Link>
        ),
        key: "create"
    },

];

const Navbar = () => {
    const [current, setCurrent] = useState("mail");

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />


        
    );
}

export default Navbar