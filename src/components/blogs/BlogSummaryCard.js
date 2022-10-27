import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const BlogSummaryCard = ({blog}) => {
    const {_id, title, description, published} = blog;
    return (
        <div>
            <h4>{title}</h4>
            <small>{published}</small>
            <p>{description.slice(0,150)}</p>
            <LinkContainer to={`/blogs/${_id}`}>
                <small>read more...</small>
            </LinkContainer>
        </div>
    );
};

export default BlogSummaryCard;