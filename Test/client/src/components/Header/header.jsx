import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const Header = () => {
        const [current, setCurrent] = useState('');
        const onClick = e => {
            console.log('click ', e);
            setCurrent(e.key);
        };

        const items = [
            {
                label: <Link to={"/"}>Home</Link>,
                key: 'home',
                icon: <MailOutlined />,
            },
            {
                label: <Link to={"/user"}>User</Link>,
                key: 'user',
                icon: <AppstoreOutlined />,
                // disabled: true,
            },
            {
                label: <Link to={"/search"}>Tra cứu tài liệu</Link>,
                key: 'search',
                icon: <SettingOutlined />,
                // children: [
                //     {
                //         type: 'group',
                //         label: 'Item 1',
                //         children: [
                //             { label: 'Option 1', key: 'setting:1' },
                //             { label: 'Option 2', key: 'setting:2' },
                //         ],
                //     },
                //     {
                //         type: 'group',
                //         label: 'Item 2',
                //         children: [
                //             { label: 'Option 3', key: 'setting:3' },
                //             { label: 'Option 4', key: 'setting:4' },
                //         ],
                //     },
                // ],
            },
            
        ];

        return (
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal" 
                items={items}
            />
    );
}


export default Header;