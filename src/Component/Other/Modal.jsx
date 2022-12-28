import React, { useContext } from 'react';
import { MdSend } from 'react-icons/md';
import { CallContext } from '../Contexting/Context';

const Modal = ({ dataId }) => {
    console.log(dataId)
    const {User} = useContext(CallContext)
    const handleCommit = (event) => {
        event.preventDefault()
        console.log(event.target.comment.value)
        const comment = event.target.comment.value;
        const data = {
            comment: comment, 
            name: User.displayName,
            photo:User.photoURL
        }
        fetch(`http://localhost:5000/update?id=${dataId}`,{
            method: "PUT",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className=''>
            {/* The button to open modal */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative h-96 p-4">
                     <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='h-full  flex flex-col justify-between'>
                        <div>
                            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </div>
                        <form onSubmit={handleCommit} className='flex items-center mx-2'>
                            <input name='comment' className='input input-bordered input-sm w-full ' type="text" placeholder='enter your message' />
                            <button><MdSend className='text-3xl ml-2'></MdSend></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;