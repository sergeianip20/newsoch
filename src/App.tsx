import React from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'antd/es/date-picker';
import {Header} from "./component/Header/Header";
import {Menus} from 'component/Menu/Menu';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Hoem} from "./component/hoem";

import {Profile} from "./component/profile/Profile";
import {Messages} from "./component/Messages/Messages";
import {Login} from "./component/Login/Login";
import {Users} from "./component/Users/Users";

function App() {
    return <BrowserRouter>
        <div className='wrapper_grid'>
            <div className='header'>
                <Header/>
            </div>
            <div className='nav'>
                <Menus/>
            </div>
            <div className='content'>
                <Routes>
                    <Route path={'/'} element={<Hoem/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/messages'} element={<Messages/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>

}

export default App;
