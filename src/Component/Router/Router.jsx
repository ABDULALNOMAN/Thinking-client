import {createBrowserRouter} from 'react-router-dom'
import Main from '../Main/Main'
import Home from '../Home/Home'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import Media from '../Other/Media'
import Another from '../Other/Another'



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
             },
             {
                 path: '/media',
                 element: <Media></Media>,
                 loader:()=>fetch('http://localhost:5000/media')
             },
             {
                 path:'/another/:id',
                 element: <Another></Another>,
                 loader:({params}) => {
                    const data = fetch(`http://localhost:5000/another/${params.id}`)
                    return data
                 }
             }
        ])
    }
])