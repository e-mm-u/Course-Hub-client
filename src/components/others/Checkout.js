import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { title, fee } = course;

    return (
        <div className='text-center my-4'>
            <h4 className='text-secondary'>Checkout</h4>
            <hr />
            <h3>Course : {title}</h3>
            <h3>Fee : {fee}$</h3>
            <hr />
            <p>Pay <b>{fee}</b>$  to enroll this single course</p>
            <h6><b>OR</b></h6>
            <p>Get premium : Pay <b>100</b>$/year  to access all the courses</p>
            <Button>Proceed</Button>
        </div>
    );
};

export default Checkout;