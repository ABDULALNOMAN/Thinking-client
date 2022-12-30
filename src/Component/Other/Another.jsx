import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { RiSendPlane2Fill } from 'react-icons/ri';import { FaBeer } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';
import Comments from './Comments';
import { CallContext } from '../Contexting/Context';

const Another = () => {
    const {User}=useContext(CallContext)
    const datas = useLoaderData()
    const { image, text, _id, displayName, userImage, commentBox } = datas
    console.log(commentBox)
    const handleCommentAnother = (event) => {
        event.preventDefault()
        const commentData = {
            userimage: User.photoURL,
            username: User.displayName,
            comment: event.target.comment.value,
            index:_id
        }
        fetch(`http://localhost:5000/update?id=${_id}`, {
            method: "PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(commentData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }
    return (
        <div className=' md:my-8 md:mx-8'>
            <div className='bg-slate-300'>
                <div className=' flex justify-between h-16 items-center mx-2'>
                    <div className='flex items-center'>
                        <img className='mr-2 w-10 h-10 rounded-full border-2 border-blue-3' src={userImage} alt="image" />
                        <p>{displayName}</p>
                    </div>
                    <i><FaBeer></FaBeer></i>
                </div>
            </div>
            <p className='border-b-2 border-b-blue-2'></p>
            <div  className='text-black bg-slate-300 px-2 py-2'>
                <p>{text}</p>
            </div>
            <div className='bg-blue-2'>
                <img className='h-96 w-full' src={image} alt="" />
            </div>
            <div className='flex justify-around py-2 bg-slate-300 h-14 items-center'>
                <div className='flex items-center'>
                    <i className=''><AiFillLike className='text-2xl'></AiFillLike></i>
                    <p>like</p>
                </div>
                <div className=''>
                    <form className='flex items-center' onSubmit={handleCommentAnother}>
                        <input type="text" name='comment' className='input input-bordered input-sm w-full bg-white text-black' placeholder='Enter you comment' />
                        <button><RiSendPlane2Fill className='text-2xl ml-1'></RiSendPlane2Fill></button>
                    </form>
                </div>
                <div className='flex items-center '>
                  <TbListDetails className='text-2xl mr-1'></TbListDetails>
                  <p>details</p>
                </div>
            </div>
            <div>
                {commentBox?.length && commentBox?.map(data=><Comments key={data._id} data={data}></Comments>) }
            </div>
        </div>
    );
};

export default Another;