import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import { BsStarHalf } from 'react-icons/bs';
import { GrDiamond  } from 'react-icons/gr';
import { jsPDF } from 'jspdf'


const CourseDetails = () => {

    const createPdf = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await document.querySelector("#pdf");
        pdf.html(data).then(() => {
            pdf.save("course_details.pdf");
        });
    }

    const course = useLoaderData();
    const { course_id, photoURL, title, details, rating, fee, requiredTime } = course;
    console.log(photoURL, title)
    return (

        <div className='my-3 d-flex justify-content-center'>
            <div className='card w-75 border-0'>
                <div onClick={createPdf} className='border p-2 w-25 d-flex justify-content-center'><FiDownload ></FiDownload> </div>
                <Image className='w-85 rounded' src={photoURL} style={{ height: '30vw' }} />
                <div id='pdf'>
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{details}...</p>
                    </div>
                    <div className='card-body'>
                        <div className='d-flex align-items-center gap-1'><p className='m-0'>Rating : {rating}</p><BsStarHalf></BsStarHalf></div>
                        <p className='m-0'> Time Reuired : {requiredTime} hr  </p>
                        <p className='m-0'> Fee : {fee} $</p>
                    </div>
                    <div className="card-body d-flex gap-2">
                        <LinkContainer to={`/courses/checkout/course/${course_id}`}>
                            <Button variant='dark'>Enroll</Button>
                        </LinkContainer>
                        <LinkContainer to={`/courses/checkout/course/${course_id}`}>
                            <Button variant='warning' >Get premium <GrDiamond ></GrDiamond></Button>
                        </LinkContainer>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseDetails;