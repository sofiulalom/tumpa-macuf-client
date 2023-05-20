import React from 'react';

const ApoinmentService = ({apoinmenoption,setTrithment}) => {
    const {name, slots}=apoinmenoption;
    return (
        <div className="card w-80 ml-12 shadow-xl  text-black">
        <div className="card-body">
          <h2 className=" text-secondary text-center font-bold">{name} </h2>
          
         
          <p>{slots.length > 0 ? slots[0] : 'Try another day' }</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces': 'space' } abaleabale</p>
          <div className="card-actions justify-center">
            <label
            htmlFor="BookMarkModal"
            className="btn btn-secondary btn-sm text-white"
          onClick={()=> setTrithment (apoinmenoption)}
            >booking now</label>
          </div>
        </div>
      </div>
    );
};

export default ApoinmentService;