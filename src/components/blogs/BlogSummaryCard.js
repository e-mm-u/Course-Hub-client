import React from 'react';
import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const BlogSummaryCard = ({blog}) => {
    const {_id, title, description, published, name} = blog;
    return (
        <Card className='border-0 h-100'>
            <Card.Title className='text-dark'>{title}</Card.Title>
            <Card.Body className='d-flex justify-content-end gap-3'>
            <small>{published}</small>
            <small>{name}</small>
            </Card.Body>
            <p>{description.slice(0,150)} 
            <LinkContainer to={`/blogs/${_id}`}>
                <small className='text-primary'>....read more</small>
            </LinkContainer> </p>
        </Card>
    );
};

export default BlogSummaryCard;