import React, { useEffect, useState } from 'react';
import ApoinmentService from './ApoinmentService';


import "react-datepicker/dist/react-datepicker.css";
import Datepicar from '../Datepicar/Datepicar';

const ApoinmentServices = () => {
    const [services, setServices]=useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then( res => res.json())
        .then(data => setServices(data))
    },[])
    return (
       
      <div>
            <div className='ml-96 mb-2'>
            <Datepicar></Datepicar>
            </div>
            
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                    services?.map(service  => <ApoinmentService 
                    key={service._id}
                    service={service}
                    ></ApoinmentService>)
                }
            </div>
        
        </div>
    );
};

export default ApoinmentServices;