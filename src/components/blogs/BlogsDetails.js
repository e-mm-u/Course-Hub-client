import React from 'react';
import { Card} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const BlogsDetails = () => {
    const blog = useLoaderData();
    const { title, description, name, published, photoURL } = blog;
    return (
        <Card className='border-0'>
            <Card.Body className='d-flex justify-content-center'><Card.Img src={photoURL} style={{ height: '40vh', width: '60vw' }}></Card.Img></Card.Body>
            <Card.Title className='mt-3 mb-0'>{title}</Card.Title>
            <Card.Body className='d-flex flex-column align-items-end'>
                <Card.Text className='mb-0'>{published}</Card.Text>
                <Card.Text className='mb-0'>{name}</Card.Text>
            </Card.Body>
            <Card.Text>{description}</Card.Text>
        </Card>
    );
};

export default BlogsDetails;