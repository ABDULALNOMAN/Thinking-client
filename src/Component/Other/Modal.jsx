import React from 'react';
import { useForm } from 'react-hook-form';

const Modal = () => {
    const { register, handleSubmit } = useForm()
    const handleModalForm = (data) => {
        console.log(data)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box bg-blue-1">
                    <form onSubmit={handleSubmit(handleModalForm)}>
                        <div>
                            <label className="label">
                                <span className="label-text text-white">last name</span>
                            </label>
                            <input {...register('lastname')} type="text" placeholder="last name" className="input bg-white text-black input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-white">last name</span>
                            </label>
                            <input {...register('lastname')} type="text" placeholder="last name" className="input bg-white text-black input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-white">last name</span>
                            </label>
                            <input {...register('lastname')} type="text" placeholder="last name" className="input bg-white text-black input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-white">last name</span>
                            </label>
                            <input {...register('lastname')} type="text" placeholder="last name" className="input bg-white text-black input-bordered w-full" />
                        </div>
                    </form>
                    <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">x</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;