import React from 'react';
import useServices from '../../Hooks/useServices';
import BreadCrumb from '../Breadcrumb/Breadcrumb';
import Service from '../Service/Service';

const ServicesPage = () => {
    const { services } = useServices()
    return (
        <>
            <BreadCrumb text='Our Services' img="https://i.ibb.co/pXnnq7N/cdc-u-N8-TV9-Pw2ik-unsplash.jpg"></BreadCrumb>
            <div className='container py-5 '>

                <div class="row row-cols-1 row-cols-md-3 g-4 py-5">

                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default ServicesPage;