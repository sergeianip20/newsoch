import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./state/store";
import { Provider } from 'react-redux';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Profile} from "./component/profile/Profile";
import {Messages} from "./component/Messages/Messages";
import {Login} from "./component/Login/Login";
import {Users} from "./component/Users/Users";
export const router = createBrowserRouter([
  {
     path: '/',
     element: <App />
  },{
   path: '/login',
    element: <Login />
  },
  {
   path:'/profile',
    element: <Profile />
  },
  {
  path:'/messages',
    element: <Messages />
  
  },{
  path: '/users',
    element: <Users />
  
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <Header/>
<RouterProvider router={router}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
