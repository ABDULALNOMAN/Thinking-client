import React from 'react';

const Modal = ({items,register,handleSubmit,handleModalForm}) => {
    const {_id,college,country,email,name,phone,District} =items
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box bg-blue-1">
                    <form onSubmit={handleSubmit(handleModalForm)}>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">name</span>
                                </label>
                                <input {...register('name')} type="text" placeholder={name} className="input input-sm bg-white text-black input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">phone</span>
                                </label>
                                <input {...register('phone')} type="text" placeholder={phone} className="input input-sm bg-white text-black input-bordered w-full" />
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-white">email</span>
                            </label>
                            <input {...register('email')} type="text" placeholder={email} className="input bg-white input-sm text-black input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-white">college</span>
                            </label>
                            <input {...register('college')} type="text" placeholder={college} className="input input-sm bg-white text-black input-bordered w-full" />
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">district</span>
                                </label>
                                <input {...register('district')} type="text" placeholder={District} className="input input-sm bg-white text-black input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">country</span>
                                </label>
                                <input {...register('country')} type="text" placeholder={country} className="input input-sm bg-white text-black input-bordered w-full" />
                            </div>
                        </div>
                    <div className="modal-action">
                        <button className='btn btn-info btn-sm' type='submit'>oncick</button>
                        <label htmlFor="my-modal" className="btn btn-warning btn-sm">close</label>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;