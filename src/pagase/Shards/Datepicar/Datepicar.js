import React from 'react';
import { DayPicker } from 'react-day-picker';

const Datepicar = ({selected,setSelected}) => {
    
    return (
      
        
        <div className='shadow-xl '>
            <DayPicker 
            mode='single'
            selected={selected}
            onSelect={setSelected}
            />
            
            
        </div>
        
    );
};

export default Datepicar;