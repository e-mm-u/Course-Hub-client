import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/courses/CourseDetails";
import Four0Four from "../components/Four0Four";
import Home from "../layouts/Home";
import Login from "../components/logs/Login";
import Register from "../components/logs/Register";
import Courses from "../layouts/Courses";
import CourseContainer from "../components/courses/CourseContainer";
import CoursesSidebar from "../components/courses/CoursesSidebar";
import { Col, Container, Row } from "react-bootstrap";

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
                loader: () => fetch('http://localhost:5000/courses')
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
                        loader: () => fetch('http://localhost:5000/courses')
                    },
                    // category wise course container 
                    {
                        path: '/courses/course_category/:id',
                        element: <CourseContainer></CourseContainer>,
                        loader: ({ params }) => fetch(`http://localhost:5000/course_category/${params.id}`)
                    },
                    // individual course details page
                    {
                        path: '/courses/course/:id',
                        element: <CourseDetails></CourseDetails>,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)

                    },

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