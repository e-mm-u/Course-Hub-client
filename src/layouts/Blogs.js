import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import BlogSidebar from '../components/blogs/BlogSidebar';
import '../css/blogs.css'

const Blogs = () => {
    return (
        <Container >
            <Row className='scroll-hide'>
                <Col xs={9} className='border border-danger scroll-hide' >
                    <Outlet></Outlet>
                </Col>
                <Col xs={3} className='border border-danger scroll-hide' >
                    <BlogSidebar></BlogSidebar>
                </Col>
            </Row>
        </Container>
        // style={{ height : '100vh' ,maxHeight : '100vh', overflowY : 'scroll'}}
    );
};

export default Blogs;