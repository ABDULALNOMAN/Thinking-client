import {React, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CallContext } from '../Contexting/Context';

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
            <div className="hero min-h-screen bg-black text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">register</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-700">
                    <form onSubmit={handleSubmit(handleRegisterForm)} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input {...register('email')} type="email" placeholder="email" className="input text-black input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input {...register('password')} type="password" placeholder="password" className="input text-black input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">register</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;