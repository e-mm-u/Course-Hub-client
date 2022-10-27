import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const BlogsDetails = () => {
    const blog = useLoaderData();
    const {title, description, name, published, photoURL} = blog;
    return (
        <div>
            <Image src={photoURL} style={{height : '200px', width:'200px'}}></Image>
            <h4>{title}</h4>
            <small>{published}</small>
            <small>{name}</small>
            <p>{description}</p>
        </div>
    );
};

export default BlogsDetails;