import React, { useContext, useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { TbListDetails } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { CallContext } from '../Contexting/Context';


const Mediadata = ({ data,refetch }) => {
    const {User}=useContext(CallContext)
    const { image, text, _id, displayName, userImage, commentBox,like } = data
    
    const [liking, setLiking] = useState(false)
    const [count,setCount]=useState(0)
    const handleLikeButtonClick = (id) => {
        if (liking) {
            setCount(count-1)
        }
        else {
            setCount(count+1)
        }
        setLiking(!liking)
        const datashow = {
            like:count
        }
        fetch(`https://thinking-server.vercel.app/likecount?id=${id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(datashow)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    refetch()
                }
            })
    }
    const handleCommentData = (event) => {
        event.preventDefault()
        const commentData = {
            userimage: User.photoURL,
            username: User.displayName,
            comment: event.target.comment.value,
            index:_id
        }
        fetch(`https://thinking-server.vercel.app/update?id=${_id}`, {
            method: "PUT",
            headers: {
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
    const speicfic = commentBox?.find((data) => data.index == _id)
    return (
        <div>
             <div className='bg-slate-300'>
                <div className=' flex justify-between h-14 items-center mx-2'>
                    <div className='flex items-center'>
                        <img className='mr-2 w-10 h-10 rounded-full border-2 border-blue-3' src={userImage} alt="image" />
                        <p>{displayName}</p>
                    </div>
                    <i><FaBeer></FaBeer></i>
                </div>
            </div>
            <p className='border-b-2 border-b-blue-2'></p>
            <div className='text-black bg-slate-300 px-2 py-2'>
                <p>{text}</p>
            </div>
            <div className='bg-blue-2'>
                <img src={image} alt="" />
            </div>
            <div className='flex justify-around py-2 h-14 items-center'>
                <button onClick={()=>handleLikeButtonClick(_id)} className='flex items-center'>
                    <i className=''>{liking ? <AiOutlineLike className='text-2xl'></AiOutlineLike>:<AiFillLike className='text-2xl'></AiFillLike>}</i>
                    <p>like:<span className='font-bebes'>{like}</span></p>
                </button>
                <div className=''>
                    <form className='flex items-center' onSubmit={handleCommentData}>
                        <input type="text" name='comment' className='input input-bordered input-sm w-full bg-white text-black' placeholder='Enter you comment' />
                        <button><RiSendPlane2Fill className='text-2xl ml-1'></RiSendPlane2Fill></button>
                    </form>
                </div>
                <div className='flex items-center '>
                    <Link to={`/another/${_id}`}><TbListDetails className='text-2xl mr-1'>details</TbListDetails></Link>
                    <p>details</p>
                </div>
            </div>
            <div className='bg-white'>
                <div className={speicfic?`flex items-start border py-2 pl-2`:`py-0`}>
                    <div>
                        <img className={speicfic ? `w-8 h-8 rounded-full border-2 border-sky-500` : ``} src={speicfic?.userimage} alt="" />
                    </div>
                    <div className='ml-2 self-center'>
                        <p className='font-bebes'>{speicfic?.username}</p>
                        <p>{speicfic?.comment}</p>
                    </div>
                </div>
            </div>
            <p className='bg-blue-5 h-10 '></p>
        </div>
    );
};

export default Mediadata;