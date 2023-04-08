import {createBrowserRouter} from 'react-router-dom'
import Home from '../../../../pagase/Home/Home/Home'
import Login from '../../../../pagase/Shards/Login/Login'
import Main from '../../Main'
export const router =createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
    ]
    },
   
]) 