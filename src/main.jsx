import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ShoesList from './pages/ShoesList.jsx'
import Shoe from './pages/Shoe.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import User from './pages/User.jsx'
import Admin from './pages/Admin.jsx'
import Cart from './pages/Cart.jsx'
import Orders from './pages/Orders.jsx'


const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/shoes',
        element:<ShoesList/>
      },
      {
        path:'/admin',
        element:<Admin/>
      },
      {
        path:'/user',
        element:<User/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/orders',
        element:<Orders/>
      }
      
      
    ]
  },
  {
    path:'/viewshoe/:id',
    element:<Shoe/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>
)
