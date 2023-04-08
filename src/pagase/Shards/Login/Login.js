import React from 'react';
import { useForm } from 'react-hook-form'
const Login = () => {
    const { register, handleSubmit } =useForm() ;
    return (
        <form onSubmit={handleSubmit()}>
        <input {...register("firstName")} />
        <input {...register("lastName")} />
        <input type="email" {...register("email")} />
  
        <input type="submit" />
      </form>
    );
};

export default Login;