import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const BlogSidebar = () => {
    const [blogs, setblogs] = useState([]);

    useEffect(()=>{
        fetch('https://course-hub-server-theta.vercel.app/blogs/')
            .then(res => res.json())
            .then(data => setblogs(data))
    },[])

    return (
        <div className=''>
            {
                blogs.map(blog => 
                    <div key={blog._id}>
                        <LinkContainer to={`/blogs/${blog._id}`}>
                            <p className='text-secondary'>{blog.title}</p>
                        </LinkContainer>
                    </div>
                )
            }
        </div>
    );
};

export default BlogSidebar;