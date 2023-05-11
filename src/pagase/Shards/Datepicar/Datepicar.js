import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const Datepicar = () => {
    const [selected, setSelected] =useState(new Date());
    return (
        <div>
            <DayPicker 
            mode='single'
            selected={selected}
            onSelect={setSelected}
            />
            <p>You picked {format(selected, 'PP')}.</p>
            
        </div>
    );
};

export default Datepicar;