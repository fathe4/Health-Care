import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'

const Banner = () => {
    return (
        <div className='hero-area d-flex align-items-center justify-content-lg-end'>
            <div>

            </div>
            <div className='bg-white  rounded shadow text-center banner-text'>
                <h2 className='fw-bolder'>Commited to Trusted HealthCare</h2>
                <p>Want a special care for you? WE provided best Home care service with many facilities, we are the trust worthy platform.</p>
                <Link to='/services'><button className='contact-btn mb-3'>Find a caregiver</button></Link>
                <Link to='/services'><button className='service-btn mb-3 ms-lg-3'>About Us</button></Link>
            </div>
        </div>
    );
};

export default Banner;