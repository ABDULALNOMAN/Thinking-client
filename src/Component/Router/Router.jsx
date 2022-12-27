import {createBrowserRouter} from 'react-router-dom'
import Main from '../Main/Main'
import Home from '../Home/Home'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'



 export const router = createBrowserRouter([
    {
         path:"/",
         element: <Main></Main>,
         children: ([
             {
                 path: '/',
                 element:<Home></Home>
             },
             {
                 path: "/login",
                 element:<Login></Login>
             },
             {
                 path: '/register',
                 element:<Register></Register>
             }
        ])
    }
])