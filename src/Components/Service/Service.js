import React from 'react';
import '../Services/services.css'

const Service = () => {

    return (
        <div className=''>

            <div class="col shadow">
                <div class="card">
                    <img src="https://healsoul.thememove.com/wp-content/uploads/2018/10/blog-32-370x237.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        <button type="button" class="service-btn">More Details <i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;