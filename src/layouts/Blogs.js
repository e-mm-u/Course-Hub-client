import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import BlogSidebar from '../components/blogs/BlogSidebar';
import '../css/blogs.css'

const Blogs = () => {
    return (
        <div className='mx-3 mt-2 mb-2'>
            <Row className='scroll-hide'>
            <h3 className='text-center text-dark'>Happy reading !</h3>
                <Col xs={8} sm={9} className='scroll-hide border-end border-success border-1' >
                    <Outlet></Outlet>
                </Col>
                <Col xs={4} sm={3} className='border-start border-info scroll-hide' >
                    <h6>Blog titles</h6>
                    <hr className='text-info'/>
                    <BlogSidebar></BlogSidebar>
                </Col>
            </Row>
        </div>
        // style={{ height : '100vh' ,maxHeight : '100vh', overflowY : 'scroll'}}
    );
};

export default Blogs;