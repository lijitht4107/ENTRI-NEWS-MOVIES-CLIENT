import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Router, RouterProvider} from 'react-router-dom'
import Root from './Root.jsx'
// import SignupForm from './conponents/LoginForm.jsx'
import LogForm from './conponents/LoginForm.jsx'
import NewSignup from './conponents/NewSignup.jsx'
import NewBlog from './conponents/NewBlog.jsx'
import Blogs from './conponents/Blogs.jsx'
import Settings from './conponents/additionalComponents/Settings.jsx'
import UserList from './conponents/additionalComponents/UserList.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import Hero from './conponents/Hero.jsx'
import Articles from './conponents/Articles.jsx'
import NewsHeader from './conponents/NewsHeader.jsx'
import Trending from './conponents/Trending.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path:'/signup',
        element:<NewSignup/>
      },
      
      {
        path:'/login',
        element:<LogForm/>
      },
      {
        path:'/newblog',
        element:
        (
          <PrivateRoute>
            <NewBlog/>
          </PrivateRoute>
        )
        
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/settings',
        element:<Settings/>
      },
      {
        path:'/users',
        element:<UserList/>
      },
      {
        path:'/hero',
        element:<Hero/>
      },
      {
        path:'/article',
        element:<Articles/>
      },
      {
        path:'/trending',
        element:<Trending/>
      },
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
    
  </React.StrictMode>,
)
