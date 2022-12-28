import React from 'react';
import { useForm } from 'react-hook-form';


// 408356244f0751ab0559a83c0ad89aaa

const Adding = () => {
    const {register ,handleSubmit}=useForm()
    const handleDataGet = (data) => {
        console.log(data.text)
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
                        image: item.data.url,
                        text:data.text
                    }
                    fetch('http://localhost:5000/adding', {
                        method: "POST",
                        headers: {
                            "content-type":"application/json"
                        },
                        body:JSON.stringify(datalist)
                    })
                        .then(res => res.json())
                        .then(call => console.log(call))
                }
            })

    }
    return (
        <div className='my-8'>
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