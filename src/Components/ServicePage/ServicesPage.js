import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const ServicesPage = () => {
    const { services } = useServices()
    return (
        <div className='container py-5 '>
            <h2 className='text-center fw-bold mt-5'>Our Services</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 py-5">

                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default ServicesPage;