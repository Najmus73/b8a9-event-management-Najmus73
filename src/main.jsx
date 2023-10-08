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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children :[
      {
        path: '/',
        element: <Home></Home>,
        loader : () => fetch('/EventData.json')
      },
      {
        path:'/blog',
        element:<PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path:'/contact',
        element:<PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
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
