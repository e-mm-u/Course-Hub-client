import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FiDownload } from 'react-icons/fi';
import { BsStarHalf } from 'react-icons/bs';

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
                    <div className='d-flex gap-1 align-items-center'><p className='m-0'>{rating}</p><BsStarHalf></BsStarHalf></div>
                    <p className='m-0'>{requiredTime} hr </p>
                    <p className='m-0'>{fee} $</p>
                </div>
                <div className='mt-2'>
                    <LinkContainer to={`/courses/course/${course_id}`}>
                        <Button className='w-100' variant='dark'>Details</Button>
                    </LinkContainer>
                </div>
            </div>
            {/* style={{height : '100px', width: '250px'}} */}
        </div>
    );
};

export default CourseSummaryCard;