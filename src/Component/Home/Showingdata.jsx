import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLike,AiFillLike } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
const Showingdata = ({ item }) => {
    const [liking, setLiking] = useState(false)
    const [count,setCount]=useState(1)
    const { image, text, _id } = item
    useEffect(() => {
        if (liking) {
          setCount(count+1)
      }
        else {
            setCount(count-1)
      }
    },[liking])
    console.log(count)
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='mr-2' src="" alt="image" />
                    <p>name</p>
                </div>
                <p>icon</p>
            </div>
            <div>
                <p>{text}</p>
                <img src={image} alt="" />
            </div>
            <div className='flex justify-around'>
                <div className='flex items-center'>
                    <i className='' onClick={() => setLiking(!liking)}>{liking ? <AiFillLike className='text-5xl bg-blue-600 rounded-full'></AiFillLike> : <AiOutlineLike className='text-5xl bg-blue-600 rounded-full'></AiOutlineLike>}</i><span className='text-xl'></span>
                </div>
                <div className='flex items-center'>
                    <i><BiMessageDetail className='text-3xl mr-1'></BiMessageDetail></i>
                    <p>comment</p>
                </div>
                <Link to={`/another/${_id}`}><button className='btn btn-primary'>details</button></Link>
            </div>
        </div>
    );
};

export default Showingdata;