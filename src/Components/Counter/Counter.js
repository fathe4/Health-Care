import React from 'react';
import './Counter.css'

const Counter = () => {
    return (
        <div className='counter-section'>
            <div className='container d-flex align-items-center justify-content-center gap-5 '>
                <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                    <div className='text-center'>
                        <img width='50px' src="https://healsoul.thememove.com/wp-content/uploads/2018/11/h1-icon-book.png" alt="" />
                        <div className='py-5'>
                            <h1 className='custom-color fw-bold'>6500<sup>+</sup></h1>
                            <h5 className='fw-bold'>Worldwide Branches</h5>
                            <p>Bring best quality health services to ones who are in need worldwide.</p>
                        </div>
                    </div>
                    <div className=' border-end border-start px-4 text-center'>
                        <img width='70px' src="https://healsoul.thememove.com/wp-content/uploads/2018/11/h1-icon-folder.png" alt="" />
                        <div className='py-5'>
                            <h1 className='custom-color fw-bold'>1000<sup>+</sup></h1>
                            <h5 className='fw-bold'>Hospital Established</h5>
                            <p>Bring best quality health services to ones who are in need worldwide.</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <img width='50px' src="https://healsoul.thememove.com/wp-content/uploads/2018/11/h1-icon-placeholder.png" alt="" />
                        <div className='py-5'>
                            <h1 className='custom-color fw-bold'>300<sup>+</sup></h1>
                            <h5 className='fw-bold'>Local Partners</h5>
                            <p>Bring best quality health services to ones who are in need worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;