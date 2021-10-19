import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices()
    return (
        <div style={{ background: '#EBF5F5', padding: '100px 0' }}>
            <div className='container  mx-auto text-center'>
                <h6>OUR SERVICES</h6>
                <h2 className='fw-bold'>Health Care Services</h2>
                <p className='w-lg-50 mx-auto'>We make efforts to change the way that healthcare services are offered in order to meet the changing needs of our patients, both for the present and future.</p>
                <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;