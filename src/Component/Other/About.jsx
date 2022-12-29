import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FcViewDetails } from 'react-icons/fc';
import Modal from './Modal';

const About = () => {
    const { data:items={},refetch } = useQuery({
        queryKey:['about'],
        queryFn: async () => {
            const res = await fetch('https://thinking-server.vercel.app/about')
            const data = res.json()
            return data
        }
    })
    const {_id,college,country,email,name,phone,District} =items
    const { register, handleSubmit } = useForm()
    const handleModalForm = (data) => {
        const updateData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            college: data.college,
            District: data.district,
            country:data.country
        }
        console.log(updateData)
        fetch(`https://thinking-server.vercel.app/modal?id=${_id}`, {
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(datas => {
                console.log(datas)
                if (datas.acknowledged) {
                    refetch()
                }
            })
    }
    console.log(items)
    return (
        <div>
            <div className='md:w-10/12 mx-auto md:mt-8 p-8 relative bg-blue-2'>
                <div className=''>
                    <div className='text-2xl font-bebes text-white'> 
                        <p><span>Name:</span> {name}</p>
                        <p><span>college:</span> {college}</p>
                        <p><span>email:</span> {email}</p>
                        <p> <span>phone:</span> {phone}</p>
                        <p><span>{District}</span> <span>{country}</span></p>
                    </div>
                </div>
                <label htmlFor="my-modal"><FcViewDetails className='absolute top-2 right-2 text-3xl '></FcViewDetails></label>
            </div>
            <Modal items={items} register={register} handleSubmit={handleSubmit} handleModalForm={handleModalForm}></Modal>
        </div>
    );
};

export default About;