import { createBrowserRouter } from 'react-router-dom'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import Home from '../Home/Home'
import Main from '../Main/Main'
import About from '../Other/About'
import Another from '../Other/Another'
import Media from '../Other/Media'


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
                 loader:()=>fetch('https://thinking-server.vercel.app/media')
             },
             {
                 path:'/another/:id',
                 element:<Another></Another>,
                 loader:({params}) => {
                    const data = fetch(`https://thinking-server.vercel.app/another/${params.id}`)
                    return data
                 }
             },
             {
                path:"/about",
                element: <About></About>,
             }
        ])
    }
])