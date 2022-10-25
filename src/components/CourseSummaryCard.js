import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CourseSummaryCard = ({course}) => {
    const {course_id, photoURL, title, details, rating, fee, requiredTime} = course;
    return (
        <div>
            <Image src={photoURL} style={{height : '100px', width: '250px'}}/>
            <h6>{title}</h6>
            <p>{details.slice(0,100)}...</p>
            <span>{rating}  </span>
            <span>{requiredTime}  </span>
            <span>{fee}</span>
            <LinkContainer to={`/course/${course_id}`}><Button>Details</Button></LinkContainer>
            
        </div>
    );
};

export default CourseSummaryCard;