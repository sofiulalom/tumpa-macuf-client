import React from 'react';
import handle from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
const Section = () => {
    return (
        <div className="hero my-20 bg-gray-100 ">
      <div className="hero-content flex-col lg:flex-row-reverse mt-5 mb-10">
        <div className="text-center lg:text-left mt-3">
          <h1 className="text-3xl font-bold w-80">Let us handle your screen <small className='text-3xl text-justify font-bold text-rose-600'>Professionally</small>.</h1>
          <p className="py-6 w-96 text-justify">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
          <div className='flex'>
            <div>
             <h1 className='text-2xl font-bold text-rose-500'>500+</h1>
             <small className='font-bold'>Happy Customar</small>
            </div>
            <div className='ml-10'>
            <h1 className='text-2xl font-bold text-rose-500'>16+</h1>
             <small className='font-bold'>Total service</small>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <img src={handle} alt="" />

        </div>
      </div>
    </div>
    );
};

export default Section;