import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Showingdata from './Showingdata';

const Showing = () => {
    const { data:items=[] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/showing')
            const data = res.json()
            return data
        }
    })
    return (
        <div>
            <div className='md:w-10/12 w-11/12 mx-auto mb-8 bg-slate-300'>
                {
                    items.map(item=><Showingdata key={item._id} item={item}></Showingdata>)
                }
            </div>
        </div>
    );
};

export default Showing;