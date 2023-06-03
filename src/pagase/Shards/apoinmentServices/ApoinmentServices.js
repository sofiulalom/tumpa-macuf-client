import React, { useState } from 'react';
import ApoinmentService from './ApoinmentService';
import "react-datepicker/dist/react-datepicker.css";
import Datepicar from '../Datepicar/Datepicar';
import BookMarkModal from '../BookmarkModal/BookMarkModal';
import ApoinmentBanner from './apoinmentBanner/ApoinmentBanner';
import ApoinmentAbaleable from './ApoinmentAbaleabale/ApoinmentAbaleable';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import Loading from '../Loading/Loading';



const ApoinmentServices = () => {
    
    const [selected, setSelected] =useState(new Date());
    const [trithment, setTrithment]=useState(null);
    const date = format(selected, 'PP')
    
     const {data: apoinmenoption =[], refetch, isLoading}=useQuery({
        queryKey: ['apoinmenoption', date],
        queryFn: async()=> {
           const res = await fetch(`http://localhost:5000/services?date=${date}`);
           const data = await res.json();
           return data 
        } 
     });
     
     if(isLoading){
        return <Loading></Loading>
     }

    return (
       
      <div>
        <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <ApoinmentBanner selected={selected} setSelected={setSelected}></ApoinmentBanner>
            <div>
           
            <Datepicar  selected={selected}
                    setSelected={setSelected}
                    ></Datepicar>
            </div>
        </div>
        </div>
            <ApoinmentAbaleable selected={selected} setSelected={setSelected}></ApoinmentAbaleable>
            
            <div className='grid gird-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                    apoinmenoption?.map(option  => <ApoinmentService 
                    key={option._id}
                    apoinmenoption={option}
                    
                    setTrithment={setTrithment}
                    ></ApoinmentService>)
                }
            </div>
            { trithment &&
              <BookMarkModal trithment={trithment}
             setTrithment={setTrithment}
             selected={selected}
             setSelected={setSelected}
             refetch={refetch}
              ></BookMarkModal>
            }
        
        </div>
    );
};

export default ApoinmentServices;