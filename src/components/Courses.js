import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseContainer from './CourseContainer';
import CourseSummaryCard from './CourseSummaryCard';
import Sidebar from './Sidebar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={3} className='border border-danger'>
                        <Sidebar></Sidebar>
                    </Col>
                    <Col xs={9} className='border border-danger'>
                        <CourseContainer courses={courses}>
                            
                        </CourseContainer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;