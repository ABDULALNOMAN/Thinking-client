import React from 'react';
import Sideber from './Sideber';
import Scroll from './Scroll';
import Messaging from './Messaging';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className="col-span-2 border">
                    <Sideber></Sideber>
                </div>
                <div className="col-span-6 border">
                    <Scroll></Scroll>
                </div>
                <div className="col-span-4 border">
                    <Messaging></Messaging>
                </div>
            </div>
        </div>
    );
};

export default Home;