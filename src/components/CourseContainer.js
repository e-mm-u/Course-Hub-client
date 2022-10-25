import React from 'react';
import CourseSummaryCard from './CourseSummaryCard';

const CourseContainer = ({ courses }) => {
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