import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Counter></Counter>
            <Services></Services>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;