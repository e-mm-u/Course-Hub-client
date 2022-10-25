import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const CoursesSidebar = () => {
    const [category, setCategory] = useState([]);

    // as sidebar is fixed so we are loading data here
    useEffect(()=>{
        fetch('http://localhost:5000/course_categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    },[])
    return (
        
        <div className=''>
            {
                category.map(cat => 
                    <div key={cat.id}>
                        <LinkContainer to={`/courses/course_category/${cat.id}`}>
                            <p className=''>{cat.name} ({cat.total})</p>
                        </LinkContainer>
                    </div> )
        
            }
        </div>
    );
};

export default CoursesSidebar;