import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/AdminHome/AdminHome";
import AllUsers from "../pages/InstructorDashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
 



const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute>
        <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
              path:'adminhome',
              element: <AdminHome></AdminHome>
            },
            {
                path:'allusers',
                element: 
                <AllUsers></AllUsers>
              
            }
             
        ]
    }
  ]);
  
  export default router;
  