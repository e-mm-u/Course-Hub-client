import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const Sidebar = () => {

    const [category, setCategory] = useState([]);
    // as sidebar is fixed so we are loading data here
    useEffect(()=>{
        fetch('http://localhost:5000/course_categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    },[])

    return (
        <div>
            {
                category.map(cat => 
                    <div key={cat.id}>
                        <LinkContainer to={`/course_category/${cat.id}`}>
                            <p>{cat.name}</p>
                        </LinkContainer>
                    </div> )
            }
        </div>
    );
};

export default Sidebar;