import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import './serviceDetail.css'

const ServiceDetail = () => {
    const [singleService, setSingleService] = useState({})
    const { serviceId } = useParams()
    const { services } = useServices()
    const serviceIdNumber = parseFloat(serviceId)


    useEffect(() => {
        const findService = services.find(service => service.id === serviceIdNumber);
        setSingleService(findService);
    }, [services])

    return (
        <div className='container '>
            <div className="row service-detail">
                <div className="col-md-8 g-4 ">
                    <div>
                        <img className='img-fluid shadow mb-5' src={singleService?.img} alt="" />
                        <h2>{singleService?.name}</h2>
                        <p>{singleService?.Description}</p>
                    </div>

                    <div>
                        <h2 className='fw-bold'>{singleService?.details?.detailTitle}</h2>
                        <p>{singleService?.details?.detailDescription}</p>
                        <h5 className='fw-bold'>Personal Care</h5>
                        <p >{singleService?.details?.personalCare}</p>
                        <h5 className='fw-bold'>Lifestyle Support</h5>
                        <p >{singleService?.details?.lifeStyleSupport}</p>

                    </div>

                    <Link to='/contact'>
                        <button className='contact-btn'>Contact For this Service</button>
                    </Link>

                </div>
                <div className="col-md-4">

                    <form class="row g-3 shadow p-lg-5 my-4">
                        <h4>Want our Service?</h4>
                        <p>Please fill-up the information we will get back to you.</p>
                        <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">First Name</label>
                            <input type="text" placeholder='Jhon' class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">Last Name</label>
                            <input type="text" placeholder='due' class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" placeholder='example@gmail.com' class="form-control" id="inputEmail4" />
                        </div>

                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Service</label>
                            <input type="text" placeholder='Service Name' class="form-control" id="inputAddress" />
                        </div>
                        <div class="col-12">
                            <label for="floatingTextarea2">Message</label>
                            <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>

                        </div>


                        <div class="col-12">
                            <button type="submit" class="contact-btn w-100">send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;