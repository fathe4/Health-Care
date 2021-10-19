import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import notFoundImg from '../../images/404.png'
import './notFound.css'

const NotFound = () => {
    const history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center py-lg-3 mt-5'>
                <img className='my-5 img-fluid not-found' src={notFoundImg} alt="" />
            </div>
            <div className='text-center my-lg-5 mb-5'>
                <h3 className='primary-color fw-bold mb-4'>The page you are looking for is not available</h3>
                <Link to='/home'><button className='contact-btn mb-3'>Home</button></Link>
                <Link onClick={goToPreviousPath}><button className='service-btn ms-lg-4'>Back to previous page</button></Link>
            </div>
        </div>
    );
};

export default NotFound;