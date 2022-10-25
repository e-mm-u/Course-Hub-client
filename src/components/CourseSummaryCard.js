import React from 'react';
import { Image } from 'react-bootstrap';

const CourseSummaryCard = ({course}) => {
    const {photoURL, title, details, rating, fee, requiredTime} = course;
    return (
        <div>
            <Image src={photoURL} style={{height : '100px', width: '250px'}}/>
            <h6>{title}</h6>
            <p>{details.slice(0,100)}...</p>
            <span>{rating}  </span>
            <span>{requiredTime}  </span>
            <span>{fee}</span>
        </div>
    );
};

export default CourseSummaryCard;