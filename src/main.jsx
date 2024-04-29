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
import SubCategory from './components/SubCategory';
import CategoryPage from './components/CategoryPage';
import CardDetails from './components/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader:() => fetch('https://woodland-weave-crafts-server.vercel.app/crafts')
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
        element: <PrivateRoute><AddCrafts></AddCrafts></PrivateRoute>,
        
      },
      {
        path: 'viewdetails/:id',
        element: 
          <PrivateRoute><ViewDetailsPage></ViewDetailsPage>
          </PrivateRoute>
        ,
          
      
        loader: ({ params }) => fetch(`https://woodland-weave-crafts-server.vercel.app/viewdetails/${params.id}`)
      },
      {
        path: 'cardDetails/:category',
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`https://woodland-weave-crafts-server.vercel.app/cardDetails/${params.category}`)
      },
      {
        path: '/mycard',
        element:<PrivateRoute> <MyCraftList></MyCraftList>
        </PrivateRoute>
      },
      {
        path: '/updateCard/:id',
        element: <PrivateRoute>
          <UpdatePage></UpdatePage>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://woodland-weave-crafts-server.vercel.app/updateCard/${params.id}`)
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
      },
      {
        path: '/subcategory',
        element: <SubCategory></SubCategory>,
        
      },
      {
        path: '/category',
        element: <CategoryPage></CategoryPage>,
        loader:  () => fetch('https://woodland-weave-crafts-server.vercel.app/category')
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
