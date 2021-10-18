import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div style={{ background: '#EBF5F5', padding: '100px 0' }}>
            <div className='services-section  mx-auto text-center'>
                <h6>OUR SERVICES</h6>
                <h2 className='fw-bold'>Health Care Services</h2>
                <p className='w-50 mx-auto'>We make efforts to change the way that healthcare services are offered in order to meet the changing needs of our patients, both for the present and future.</p>
                <div class="row row-cols-1 row-cols-md-4 g-4 py-5">
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;