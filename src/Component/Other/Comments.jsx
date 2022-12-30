import React from 'react';

const Comments = ({ data }) => {
    console.log(data)
    const {username,userimage,comment}= data
    return (
        <div>
            <div className='flex items-start border py-2 pl-2'>
                <div>
                    <img className='w-8 h-8 rounded-full border-2 border-sky-500' src={userimage} alt="" />
                </div>
                <div className='ml-2 self-center'>
                    <p className='font-bebes'>{username}</p>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;