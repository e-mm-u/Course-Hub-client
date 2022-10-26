import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CourseSummaryCard = ({ course }) => {
    const { course_id, photoURL, title, details, rating, fee, requiredTime } = course;
    return (
        <div className='card border-1 h-100'>
            <Image className='card-img rounded ' src={photoURL} style={{ height: '200px', }} />
            <div className="card-body">
                <h6>{title}</h6>
                <p>{details.slice(0, 100)}...</p>
            </div>
            <div className="card-body">
                <div className='d-flex gap-4'>
                    <span>{rating}  </span>
                    <span>{requiredTime}  </span>
                    <span>{fee}</span>
                </div>
                <div className='mt-2'>
                    <LinkContainer to={`/courses/course/${course_id}`}>
                        <Button className='w-100'>Details</Button>
                    </LinkContainer>
                </div>
            </div>
            {/* style={{height : '100px', width: '250px'}} */}
        </div>
    );
};

export default CourseSummaryCard;