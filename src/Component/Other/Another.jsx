import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {BiLike} from 'react-icons/bi';

const Another = () => {
    const datas = useLoaderData()
    const {image,text,_id}=datas
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
                <i><BiLike></BiLike></i>
                <p>icon</p>
                <button className='btn btn-primary'>details</button>
            </div>
        </div>
    );
};

export default Another;