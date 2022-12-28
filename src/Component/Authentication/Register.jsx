import {React, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CallContext } from '../Contexting/Context';
import image from '../../assets/undraw_login_re_4vu2 (1).svg'

const Register = () => {
    const { handleRegisteUser } = useContext(CallContext)
    const { register, handleSubmit} = useForm()
    const handleRegisterForm = (data) => {
        const email = data.email
        const password = data.password
        handleRegisteUser(email, password)
            .then((result => {
                const user = result.user;
                console.log(user)
            }))
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-blue-3 text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:block hidden">
                        <img src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-2">
                        <form onSubmit={handleSubmit(handleRegisterForm)} className="card-body">
                            <div className='grid grid-cols-2 gap-2'>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-white">first name</span>
                                    </label>
                                    <input {...register('email')} type="email" placeholder="first name" className="input bg-white text-black input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-white">last name</span>
                                    </label>
                                    <input {...register('email')} type="email" placeholder="last name" className="input bg-white text-black input-bordered w-full" />
                                </div>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">image</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-info w-full bg-blue-1 btn-" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input {...register('email')} type="email" placeholder="email" className="input bg-white text-black input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input {...register('password')} type="password" placeholder="password" className="input bg-white text-black input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-3 hover:bg-blue-1 text-black hover:text-white border-none">register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;