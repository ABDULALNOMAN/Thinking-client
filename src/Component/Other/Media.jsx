import React, { useState } from 'react';
import Mediadata from './Mediadata';
import { useQuery } from '@tanstack/react-query';

const Media = () => {
    const { data:datas=[],refetch } = useQuery({
        queryKey:["showing"],
        queryFn: async() => {
            const res = await fetch('https://thinking-server.vercel.app/media')
            const data = res.json()
            return data
        }
    })
    return (
        <div>
            <div className=' bg-slate-300 md:mx-8 md:mt-8'>
                {datas.map(data=><Mediadata key={data._id} data={data} refetch={refetch}></Mediadata>)}
            </div>
        </div>
    );
};

export default Media;