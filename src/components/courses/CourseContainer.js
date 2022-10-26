import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from './CourseSummaryCard';

const CourseContainer = () => {
    const courses = useLoaderData();
    return (
        // d-flex flex-wrap gap-3 justify-content-center
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3'> 
            {
                courses.map(course =>
                    <div className='col' key={course.course_id}>
                        <CourseSummaryCard course={course}> </CourseSummaryCard>
                    </div>
                )
            }
        </div>
    );
};

export default CourseContainer;