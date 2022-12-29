import { useForm } from 'react-hook-form';
import React, {useContext} from 'react';
import { CallContext } from '../Contexting/Context';
import image from '../../assets/undraw_login_re_4vu2 (1).svg'
import { toast } from 'react-hot-toast';

const Register = () => {
    const { register, handleSubmit} = useForm()
    const { handleRegisteUser,handleUpdataeUser } = useContext(CallContext)
    const handleRegisterForm = (data) => {
        const formData = new FormData()
        const email = data.email
        const password = data.password
        const firstName = data.firstname;
        const lastName = data.lastname;
        const image = data.image[0]
        formData.append('image',image)
        const name = firstName +' '+ lastName
        handleRegisteUser(email, password)
            .then((result) =>{
                const user = result.user;
                console.log(user)
                toast.success('signUP successfull')
                if (user.uid) {
                    fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb}`,{
                        method:"POST",
                        body:formData
                    })
                        .then(res => res.json())
                        .then(item => {
                            if (item.success) {
                                const userdata = {
                                    photoURL: item.data.url,
                                    displayName: data.text
                                }
                                handleUserData(userdata)
                            }
                        })
                }
            })
        .catch((error) => {
            console.log(error)
        })
    }
    const handleUserData = (userdata) => {
        handleUpdataeUser(userdata)
        .then(result => {
            const user = result.user;
            })
        .catch((err) => {
            console.log(err)
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
                                    <input {...register('firstname')} type="text" placeholder="first name" className="input bg-white text-black input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-white">last name</span>
                                    </label>
                                    <input {...register('lastname')} type="text" placeholder="last name" className="input bg-white text-black input-bordered w-full" />
                                </div>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">image</span>
                                </label>
                                <input {...register('image')} type="file" className="file-input file-input-bordered file-input-info w-full bg-blue-1 btn-" />
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