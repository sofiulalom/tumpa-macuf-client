import React from 'react';

const ApoinmentService = ({service}) => {
    const {name, price, description}=service;
    return (
        <div className="card w-80 ml-12 shadow-xl  text-black">
        <div className="card-body">
          <h2 className=" text-secondary text-center">{name} </h2>
          
          <p> {description} </p>
          <p><small className='text-orange-600'>price: ${price}</small></p>
          <div className="card-actions justify-center">
            <button className="btn btn-secondary btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ApoinmentService;