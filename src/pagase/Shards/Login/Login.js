import React from 'react';
import { useForm } from 'react-hook-form'
const Login = () => {
    const { register,formState:{errors}, handleSubmit } =useForm() ;
    return (
        <div className='w-4/12 m-auto p-5 mt-44 shadow-2xl'>
          <div>
            <h1 className='text-4xl'>Login</h1>
            
            <form onSubmit={handleSubmit()}>
            <div className="form-control w-80 ">
            <label className="label">
              <span className="">Your Email</span>
            </label>
              <input {...register("email",{required: 'email address is required'})} placeholder="Your Email" className='input input-bordered w-full p-5 ' />
              {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
              <label className="label">
              <span className="">password</span>
            </label>
              <input {...register("password", {required:true})} placeholder="password" className='input input-bordered w-full p-5 '/>
              {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
              
              <input className='btn btn-outline mt-2' type="submit" value='Login' />
              </div>
            </form>
           
          
          </div>
        </div>
    );
};

export default Login;