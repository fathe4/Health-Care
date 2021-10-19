import React from 'react';
import { Link } from 'react-router-dom';
import '../Services/services.css'

const Service = ({ service }) => {

    const { id, img, name, Description } = service

    return (
        <div className=''>

            <div class="col shadow p-3 bg-white border-0">
                <div class="card border-0 text-center">
                    <img height='230px' src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text ">{Description.slice(0, 65)}...</p>
                        <Link to={`/service/${id}`}>
                            <button type="button" class="service-btn text-center">More Details <i class="fas fa-angle-double-right"></i></button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;