import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className='hero-area d-flex align-items-center justify-content-end'>
            <div>

            </div>
            <div className='bg-white p-5 m-5 w-50 rounded shadow'>
                <h2 className='fw-bolder'>Commited to Trusted HealthCare</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nihil. Laboriosam consequatur quaerat sunt fugiat!</p>
                <button className='btn btn-danger'>Find a caregiver</button>
                <button className='btn btn-outline-dark ms-3'>View all services</button>
            </div>
        </div>
    );
};

export default Banner;