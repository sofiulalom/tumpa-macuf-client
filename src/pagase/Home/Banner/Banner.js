import React from 'react';
import beauty from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
const Banner = () => {
    return (
        <div className="hero bg-orange-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={beauty} alt='' className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-4xl text-black font-bold text-justify" style={{width: '350px'}}>BEAUTY SALON  FOR EVERY WOMEN</h1>
            <p className="py-6 text-gray-600 w-72 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            <button className="btn btn-secondary px-8 mr-56">Get an Appoinment</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;