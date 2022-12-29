import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Showingdata from './Showingdata';

const Showing = () => {
    const { data=[] } = useQuery({
        queryKey:["showing"],
        queryFn: async() => {
            const res = await fetch('https://thinking-server.vercel.app/showing')
            const data = res.json()
            return data
        }
    })
    return (
        <div>
            <div className='md:w-10/12 w-11/12 mx-auto mb-8 bg-slate-300 grid grid-cols-1 gap-6'>
                {data.map((item) =><Showingdata key={item._id} item={item}></Showingdata>)}
            </div>
        </div>
    );
};

export default Showing;