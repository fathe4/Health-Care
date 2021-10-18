import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Counter></Counter>
            <Services></Services>
        </div>
    );
};

export default Home;