import React from 'react';
import Banner from './Banner';
import Adding from './Adding';
import Showing from './Showing';
import Privetroute from '../Authentication/Privetroute';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Adding></Adding>
            <Showing></Showing>
        </div>
    );
};

export default Home;