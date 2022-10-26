import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { photoURL, title, details, rating, fee, requiredTime } = course;
    console.log(photoURL, title)
    return (
        <div className='my-3 d-flex justify-content-center'>
            <div className='card w-75 border-0'>
                <Image className='w-85 rounded' src={photoURL} style={{ height: '30vw' }} />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{details}...</p>
                </div>
                <div className='card-body d-flex gap-3'>
                    <span>{rating}  </span>
                    <span>{requiredTime}  </span>
                    <span>{fee}$</span>
                </div>
                <div className="card-body d-flex gap-2">
                    <Button>Enroll</Button>
                    <Button>Get premium</Button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;