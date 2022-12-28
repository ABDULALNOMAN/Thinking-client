import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Mediadata from './Mediadata';
import Modal from './Modal';

const Media = () => {
    const datas = useLoaderData()
    const [dataId, setDataId] = useState(null)
    return (
        <div>
            <div className='mb-8 bg-slate-300 mx-8 mt-8'>
                {datas.map(data=><Mediadata key={data._id} setDataId={setDataId} data={data}></Mediadata>)}
            </div>
            <Modal dataId={dataId}></Modal>
        </div>
    );
};

export default Media;