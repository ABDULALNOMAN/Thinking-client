import React from 'react';
import { Link } from 'react-router-dom';

const Showingdata = ({ item }) => {
    const { image, text, _id } = item
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='mr-2' src="" alt="image" />
                    <p>name</p>
                </div>
                <p>icon</p>
            </div>
            <div>
                <p>{text}</p>
                <img src={image} alt="" />
            </div>
            <div className='flex justify-around'>
                <p>icon</p>
                <p>icon</p>
                <Link to={`/another/${_id}`}><button className='btn btn-primary'>details</button></Link>
            </div>
        </div>
    );
};

export default Showingdata;