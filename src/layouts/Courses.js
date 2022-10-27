import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import CoursesSidebar from '../components/courses/CoursesSidebar';
import '../css/blogs.css'

const Courses = () => {
    return (
        <div className='mx-3'>
            <Row className='scroll-hide mt-5 g-2'>
                <Col xs={3} className='border-end  border-info scroll-hide'>
                    <CoursesSidebar></CoursesSidebar>
                </Col>
                <Col xs={9} className='border-start border-danger scroll-hide'>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div>
    );
};

export default Courses;