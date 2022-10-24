import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses";
import Four0Four from "../components/Four0Four";
import Home from "../components/Home";
import Login from "../components/logs/Login";
import Register from "../components/logs/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home ></Home>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '*', 
                element : <Four0Four></Four0Four>
            }
        ]
    }
])
export default routes;