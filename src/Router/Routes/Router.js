import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Orders from "../../pages/Orders/Orders";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
          path:"/signup",
          element:<SignUp/>
        },
        {
            path:"/checkout/:id",
            element:<CheckOut/>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/orders',
           element:<Orders/>
        }
      ]
    }
  ])

  export default router;