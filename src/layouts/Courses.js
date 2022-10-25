import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import CoursesSidebar from '../components/courses/CoursesSidebar';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col xs={3} className='border border-danger'>
                    <CoursesSidebar></CoursesSidebar>
                </Col>
                <Col xs={9} className='border border-danger'>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;