import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/home/Home";
import Login from "../../pages/Login/Login";

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
        }
      ]
    }
  ])

  export default router;