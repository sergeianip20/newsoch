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
    return         <div className='wrapper_grid'>
            <div className='header'>
               
            </div>
            <div className='nav'>
                <Menus/>
            </div>
            <div className='content'>
                
            </div>
        </div>
 

}

export default App;
