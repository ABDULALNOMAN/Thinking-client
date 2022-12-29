import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CallContext } from '../Contexting/Context';
import loginImag from '../../assets/undraw_fingerprint_login_re_t71l.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const {handleLoginUser} = useContext(CallContext)
    const { register, handleSubmit, formState: { error } } = useForm()
    const handleLoginForm = data => {
        const email = data.email;
        const password = data.password;
        console.log(data, email, password)
        handleLoginUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            toast.success('login successfull')
            navigate(from,{replace:true})
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-blue-1 text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left md:block hidden">
                        <img src={loginImag} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-4 text-white">
                        <form onSubmit={handleSubmit(handleLoginForm)} className="card-body">
                            <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input {...register('email')} type="email" placeholder="email" className="input text-black bg-white input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input {...register('password')} type="password" placeholder="password" className="input text-black bg-white input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                                <p className='text-xs'>you have no existing account <Link to={'/register'} className="text-orange-500 text-xs underline ">please registation</Link></p>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;