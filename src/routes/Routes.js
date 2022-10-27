import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Login from "../components/logs/Login";
import Register from "../components/logs/Register";
import Courses from "../layouts/Courses";
import CoursesSidebar from "../components/courses/CoursesSidebar";
import CourseContainer from "../components/courses/CourseContainer";
import CourseDetails from "../components/courses/CourseDetails";
import { Col, Container, Row } from "react-bootstrap";
import Four0Four from "../components/others/Four0Four";
import PrivateRoutes from "./PrivateRoutes";
import Checkout from "../components/others/Checkout";
import Blogs from "../layouts/Blogs";
import BlogsContainer from "../components/blogs/BlogsContainer";
import BlogsDetails from "../components/blogs/BlogsDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home ></Home>,
        children: [
            // by default show all the courses
            {
                path: '/',
                element:
                    <Container>
                        <Row>
                            <Col xs={3} className='border border-danger'>
                                <CoursesSidebar></CoursesSidebar>
                            </Col>
                            <Col xs={9} className='border border-danger'>
                                <CourseContainer></CourseContainer>
                            </Col>
                        </Row>
                    </Container>,
                loader: () => fetch('https://course-hub-server-theta.vercel.app/courses')
            },
            // ---------------------- course layout
            {
                path: '/courses',
                element: <Courses></Courses>, //layout
                children: [
                    // to show all courses in course container
                    {
                        path: '/courses',
                        element: <CourseContainer></CourseContainer>,
                        loader: () => fetch('https://course-hub-server-theta.vercel.app/courses')
                    },
                    // category wise course container 
                    {
                        path: '/courses/course_category/:id',
                        element: <CourseContainer></CourseContainer>,
                        loader: ({ params }) => fetch(`https://course-hub-server-theta.vercel.app/course_category/${params.id}`)
                    },
                    // individual course details page
                    {
                        path: '/courses/course/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({ params }) => fetch(`https://course-hub-server-theta.vercel.app/course/${params.id}`)

                    },
                    // dynamic checkout routes
                    {
                        path: '/courses/checkout/course/:id',
                        element: <PrivateRoutes> <Checkout></Checkout></PrivateRoutes>,
                        loader: ({ params }) => fetch(`https://course-hub-server-theta.vercel.app/course/${params.id}`)
                    }
                ]
            },
            // -------------------- blog layout 
            
            {
                path : '/blogs',
                element : <Blogs></Blogs>,
                children : [
                    {
                        path : '/blogs',
                        element : <BlogsContainer></BlogsContainer>,
                        loader : ()=> fetch('http://localhost:5000/blogs/')
                    },
                    {
                        path : '/blogs/:id',
                        element : <BlogsDetails></BlogsDetails>,
                        loader : ({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
                    }
                ]

            },

            // -------------------
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <Four0Four></Four0Four>
            }
        ]
    }
])
export default routes;