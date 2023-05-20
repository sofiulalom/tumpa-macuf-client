import React, { useEffect, useState } from 'react';
import ApoinmentService from './ApoinmentService';


import "react-datepicker/dist/react-datepicker.css";
import Datepicar from '../Datepicar/Datepicar';
import BookMarkModal from '../BookmarkModal/BookMarkModal';
import ApoinmentBanner from './apoinmentBanner/ApoinmentBanner';
import ApoinmentAbaleable from './ApoinmentAbaleabale/ApoinmentAbaleable';

const ApoinmentServices = () => {
    const [apoinmenoption, setApoinmenoption]=useState();
    const [selected, setSelected] =useState(new Date());
    const [trithment, setTrithment]=useState(null)
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then( res => res.json())
        .then(data => setApoinmenoption(data))
    },[])
    return (
       
      <div>
            <div className='flex ml-80 mb-2'>
            <Datepicar  selected={selected}
            setSelected={setSelected}
            ></Datepicar>
            <ApoinmentBanner selected={selected} setSelected={setSelected}></ApoinmentBanner>
            </div>
            <ApoinmentAbaleable selected={selected} setSelected={setSelected}></ApoinmentAbaleable>
            
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
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
              ></BookMarkModal>
            }
        
        </div>
    );
};

export default ApoinmentServices;