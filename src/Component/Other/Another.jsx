import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { FaBeer } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';

const Another = () => {
    const datas = useLoaderData()
    const {image,text,_id}=datas
    return (
        <div className=' md:my-8 md:mx-8'>
            <div className='bg-slate-300'>
                <div className=' flex justify-between h-16 items-center mx-2'>
                    <div className='flex items-center'>
                        <img className='mr-2 w-10 h-10 rounded-full border-2 border-blue-3' src="" alt="image" />
                        <p>name</p>
                    </div>
                    <i><FaBeer></FaBeer></i>
                </div>
            </div>
            <p className='border-b-2 border-b-blue-2'></p>
            <div  className='text-black bg-slate-300 px-2 py-2'>
                <p>{text}</p>
            </div>
            <div className='bg-blue-2'>
                <img src={image} alt="" />
            </div>
            <div className='flex justify-around py-2 bg-slate-300 h-14'>
                <div className='flex items-center'>
                    <i className=''><AiFillLike className='text-2xl'></AiFillLike></i>
                    <p>like</p>
                </div>
                <label htmlFor="my-modal-6" className='flex items-center'>
                    <i><BiMessageDetail className='text-2xl mr-1'></BiMessageDetail></i>
                    <p>comment</p>
                </label>
                <div className='flex items-center '>
                  <TbListDetails className='text-2xl mr-1'></TbListDetails>
                  <p>details</p>
                </div>
            </div>
        </div>
    );
};

export default Another;