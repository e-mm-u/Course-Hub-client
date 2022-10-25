import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const {photoURL, title, details, rating, fee, requiredTime} = course;
    console.log(photoURL, title)
    return (
        <div>
            <div>
            <Image src={photoURL} style={{height : '300px', width: '4000px'}}/>
            <h6>{title}</h6>
            <p>{details}...</p>
            <span>{rating}  </span>
            <span>{requiredTime}  </span>
            <span>{fee}</span>

            <Button>Enroll</Button>
            <Button>Get premium</Button>
        </div>
        </div>
    );
};

export default CourseDetails;