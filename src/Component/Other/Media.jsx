import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Mediadata from './Mediadata';

const Media = () => {
    const datas = useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-2 gap-2'>
                {datas.map(data=><Mediadata key={data._id} data={data}></Mediadata>)}
            </div>
        </div>
    );
};

export default Media;