import React, {useState} from 'react';
import {
    AppstoreOutlined,
    AudioOutlined,
    HomeOutlined,
    MailOutlined,
    MessageOutlined,
    SettingOutlined,
    UserOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {NavLink, useSearchParams} from 'react-router-dom'



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const itemProfile: any = [
    getItem('Profile', 'profile', <HomeOutlined/>),
];
const itemMessages = [
    getItem('Messages', 'messages', <MessageOutlined/>,),
]
const UserItem = [
    getItem('User', 'users', <UserOutlined/>,),
]
const MusicItem = [
    getItem('Music', 'music', <AudioOutlined />,),
]
const ItemSetting = [
    getItem('Settings', 'settings', <SettingOutlined />,),
]
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
export const Menus = () => {
    const [openKeys, setOpenKeys] = useState(['']);




    return <div>


       <NavLink to={'/profile'} >
        <Menu  mode="inline"

                  openKeys={openKeys}
                  style={{width: 256}}
                  items={itemProfile}/>
        </NavLink>
        <NavLink to={'/messages'} >
            <Menu  mode="inline"
                   openKeys={openKeys}
                   style={{width: 256}}
                   items={itemMessages}/>
        </NavLink>
        <NavLink to={'/users'}>
            <Menu  mode="inline"
                   openKeys={openKeys}
                   style={{width: 256}}
                   items={UserItem}/>
        </NavLink>
        <NavLink to={'/music'}>
            <Menu  mode="inline"
                   openKeys={openKeys}
                   style={{width: 256}}
                   items={MusicItem}/>
        </NavLink>
        <NavLink to={'/settings'}>
            <Menu  mode="inline"

                   style={{width: 256}}
                   items={ItemSetting}/>
        </NavLink>
    </div>
}