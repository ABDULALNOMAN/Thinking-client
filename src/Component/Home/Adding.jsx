import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CallContext } from '../Contexting/Context';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';


// 408356244f0751ab0559a83c0ad89aaa

const Adding = () => {
    const { User} = useContext(CallContext)
    const location = useLocation()
    const [error, setError] = useState("")
    const {register,handleSubmit}=useForm()
    const handleDataGet = (data) => {
        console.log(data)
        const fromData = new FormData()
        fromData.append('image', data.file[0])
        fetch(`https://api.imgbb.com/1/upload?key=408356244f0751ab0559a83c0ad89aaa`,{
            method:"POST",
            body:fromData
        })
            .then(res => res.json())
            .then(item => {
                if (item.success) {
                    const datalist = {
                        userImage: User?.photoURL,
                        displayName:User?.displayName,
                        image: item.data.url,
                        text: data.text
                    }
                    if(User && User.uid) {
                       return fetch('http://localhost:5000/adding', {
                            method: "POST",
                            headers: {
                                "content-type":"application/json"
                            },
                            body:JSON.stringify(datalist)
                         })
                        .then(res => res.json())
                           .then(call => {
                               if (call.acknowledged) {
                                   toast.success('adding successfully')
                                   console.log(call)
                               }
                           })
                    }
                    toast.error('please login')
                    setError('error')    
                }
            })

    }
    
    return (
        <div id='adding' className='my-8'>
            {error && <Navigate to={'/login'} state={{ from: location }} replace ></ Navigate>
            }
            <form onSubmit={handleSubmit(handleDataGet)} className='md:w-10/12 w-11/12 mx-auto bg-blue-3 border p-10'>
                <textarea type="text" {...register('text')} className="textarea w-full text-black bg-white" placeholder="Bio"></textarea>
                <div>
                    <input  type="file" {...register('file')} className=" mb:my-0 my-2 file-input bg-white text-black file-input-bordered file-input-info w-full max-w-xs" />
                    <button className='btn btn-primary md:ml-2 md:w-20 w-full'>submit</button>
                </div>
            </form>
        </div>
    );
};

export default Adding;