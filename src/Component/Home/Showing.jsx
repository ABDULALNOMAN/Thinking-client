import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className='w-10/12 mx-auto'>
            {
                items.map(item=><Showingdata key={item._id} item={item}></Showingdata>)
            }
        </div>
    );
};

export default Showing;