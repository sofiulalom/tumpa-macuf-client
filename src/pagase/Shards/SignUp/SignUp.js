import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {
       const {createUser}=useContext(AuthContext)
        const { register,formState:{errors}, handleSubmit } =useForm() ;
        const handlesignup= data =>{
            console.log(data)
            createUser(data.email , data.password)
            .then(result=> {
                const user =result.user;
                console.log(user)
            })
            .catch( err  => {
                console.error(err)
            })

        }
        return (
            <div className='w-3/12 m-auto p-5 mt-44 shadow-2xl'>
              <div>
                <div><h1 className='text-4xl font-bold text-green-600'>Sign-Up</h1></div>
                
                <form onSubmit={handleSubmit(handlesignup)}>
                <div className="form-control m-auto w-80 ">
                <label className="label">
                  <span className="">Your Name</span>
                </label>
                  <input {...register("name",{required: true})} placeholder="Your Email" className='input input-bordered w-72 p-3 ' />
                  {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                <label className="label">
                  <span className="">Your Eail</span>
                </label>
                  <input {...register("email",{required: 'email address is required'})} placeholder="Your Email" className='input input-bordered w-72 p-3 ' />
                  {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                  <label className="label">
                  <span className="">password</span>
                </label>
                  <input type='password' {...register("password", {required:true})} placeholder="password" className='input input-bordered w-72 p-3 '/>
                  {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                  </div>
                  <small className='mr-36'><Link className='text-blue-700'>Forgate password</Link> </small>
              
              <input className='btn btn-primary mt-2 w-72' type="submit" value='Sign-Up' />
              <div className="flex flex-col w-72 border-opacity-50">
                <div className="divider">OR</div>
                
              </div>
                </form>
               
              
              </div>
            </div>
    );
};

export default SignUp;