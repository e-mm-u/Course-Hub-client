import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const BlogSidebar = () => {
    const [blogs, setblogs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/blogs/')
            .then(res => res.json())
            .then(data => setblogs(data))
    },[])

    return (
        <div className=''>
            {
                blogs.map(blog => 
                    <div key={blog._id}>
                        <LinkContainer to={`/blogs/${blog._id}`}>
                            <p>{blog.title}</p>
                        </LinkContainer>
                    </div>
                )
            }
        </div>
    );
};

export default BlogSidebar;