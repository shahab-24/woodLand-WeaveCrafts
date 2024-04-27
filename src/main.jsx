import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AuthProvider from './providers/AuthProvider';
import AddCrafts from './components/AddCrafts';
import PrivateRoute from './components/PrivateRoute';
import ViewDetailsPage from './components/ViewDetailsPage';
import MyCraftList from './components/MyCraftList';
import UpdatePage from './components/UpdatePage';
import Gallery from './components/Gallery';
import About from './components/About';
import AllCraftsPage from './components/AllCraftsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader:  () => fetch('http://localhost:4000/crafts')
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      }
      ,
      {
        path: '/addcrafts',
        element: <AddCrafts></AddCrafts>,
        
      },
      {
        path: 'viewdetails/:id',
        element: 
          <ViewDetailsPage></ViewDetailsPage>
      ,
        loader: ({ params }) => fetch(`http://localhost:4000/viewdetails/${params.id}`)
      },
      {
        path: '/mycard',
        element: <MyCraftList></MyCraftList>
      },
      {
        path: '/updateCard/:id',
        element: <UpdatePage></UpdatePage>,
        loader: ({params}) => fetch(`http://localhost:4000/updateCard/${params.id}`)
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/allcrafts',
        element: <AllCraftsPage></AllCraftsPage>
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
