import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from './CourseSummaryCard';

const CourseContainer = () => {
    const courses = useLoaderData();
    return (
        <div className='d-flex flex-wrap gap-4 justify-content-center'>
            {
                courses.map(course =>
                    <div key={course.course_id}>
                        <CourseSummaryCard course={course}> </CourseSummaryCard>
                    </div>
                )
            }
        </div>
    );
};

export default CourseContainer;