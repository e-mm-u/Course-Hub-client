import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogSummaryCard from './BlogSummaryCard';

const BlogsContainer = () => {
    const blogs = useLoaderData();

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3'>
            {
                blogs.map(blog =>
                    <div className='col' key={blog._id}>
                        <BlogSummaryCard blog={blog}></BlogSummaryCard>
                    </div> 
                )
            }
        </div>
    );
};

export default BlogsContainer;