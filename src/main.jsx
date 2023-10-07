import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children :[
      {
        path: '/',
        element: <Home></Home>,
        loader : () => fetch('/EventData.json')
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/details/:id',
        element:<ServiceDetail></ServiceDetail>,
        loader : () => fetch('/EventData.json')
      },
      {
         path:'/register',
         element:<Register></Register>
      },
      {
        path : '/login',
        element : <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
