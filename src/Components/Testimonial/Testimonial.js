import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './testimonial.css'

const Testimonial = () => {
    return (
        <div className='container text-center'>
            <div className='my-5 w-lg-50 mx-auto'>
                <h6> Testimonial</h6>
                <h2 className='fw-bold'>Our patient Feedbacks</h2>
                <p className='w-lg-50 mx-auto'>We make efforts to change the way that healthcare services are offered in order to meet the changing needs of our patients, both for the present and future.</p>
            </div>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={2000}
                className='testimonial'
            >
                <div>
                    <img className='customer-img' src="https://www.policymedical.com/wp-content/uploads/2015/03/Healthcare-Policy-Management-Software-Is-Important.jpg" alt='' />
                    <div className="myCarousel">
                        <h3>Frankie Kao </h3>
                        <h6>Our Customer</h6>
                        <p>
                            They have turned my life over a new leaf. I owned these guys at  @healsoul a lot for my body to be able to recover as today.
                        </p>
                    </div>
                </div>

                <div>
                    <img className='customer-img' src="https://www.thehindubusinessline.com/companies/7z9m7m/article25819638.ece/alternates/FREE_320/Abhayjpg" alt='' />
                    <div className="myCarousel">
                        <h3>Daniel Keystone</h3>
                        <h6>Our Customer</h6>
                        <p>
                            Your help in this challenging period is greatly appreciated. Our entire family extends our thanks for what HealthCare have done
                        </p>
                    </div>
                </div>

                <div>
                    <img className='customer-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqlTNBh56WSKwTvaLReJ92zk1tRHJbszpj-vE0Tf1YR4Zp-nDhtkL7gqtphcjEsryGpE&usqp=CAU" alt='' />
                    <div className="myCarousel">
                        <h3>Theo Sorel</h3>
                        <h6>Our Customer</h6>
                        <p>
                            Best service Ever, thank you for the help, i really enjoyed
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Testimonial