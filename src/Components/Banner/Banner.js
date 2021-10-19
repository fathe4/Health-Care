import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'

const Banner = () => {
    return (
        <div className='hero-area d-flex align-items-center justify-content-end'>
            <div>

            </div>
            <div className='bg-white p-lg-5 m-5 w-lg-50 p-4 rounded shadow text-center'>
                <h2 className='fw-bolder'>Commited to Trusted HealthCare</h2>
                <p>Want a special care for you? WE provided best Home care service with many facilities, we are the trust worthy platform.</p>
                <Link to='/services'><button className='btn btn-danger mb-3'>Find a caregiver</button></Link>
                <Link to='/services'><button className='btn btn-outline-dark mb-3 ms-lg-3'>View all services</button></Link>
            </div>
        </div>
    );
};

export default Banner;