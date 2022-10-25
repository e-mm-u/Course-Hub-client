import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
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
                element: <Courses></Courses>,
                loader : ()=> fetch('http://localhost:5000/courses')
            },
            {
                path: '/course_category/:id',
                element: <Courses></Courses>,
                loader : ({params})=> fetch(`http://localhost:5000/course_category/${params.id}`)
            },
            {
                path : '/course/:id',
                element : <CourseDetails></CourseDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
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