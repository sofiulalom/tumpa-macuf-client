import React from 'react';

const Service = ({service}) => {
    const {title, image, price,description}=service;
    return (
        <div className="card w-80 bg-whte shadow-xl">
        <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl  w-20" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-black ">{title} </h2>
            <h3 className='text-3xl text-rose-500 font-bold'>${price}</h3>
            <p className='text-gray-500'> {description} </p>
            
        </div>
        </div>
    );
};

export default Service;