import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FcViewDetails } from'react-icons/fc';
import Modal from './Modal';

const About = () => {
    const data = useLoaderData()
    console.log(data)
    const {_id,college,country,email,name,phone,District} =data
    return (
        <div>
            <div className='w-10/12 mx-auto mt-8 border-2 border-red-500 p-8 relative'>
                <div className=''>
                    <div> 
                        <p>Name: {name}</p>
                        <p>college: {college}</p>
                        <p>email: {email}</p>
                        <p> phone: {phone}</p>
                        <p><span>{District}</span> <span>{country}</span></p>
                    </div>
                </div>
                <label htmlFor="my-modal"><FcViewDetails className='absolute top-2 right-2 text-3xl'></FcViewDetails></label>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default About;