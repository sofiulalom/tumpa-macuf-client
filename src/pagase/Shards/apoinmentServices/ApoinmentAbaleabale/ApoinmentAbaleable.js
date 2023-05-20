import { format } from 'date-fns';
import React from 'react';

const ApoinmentAbaleable = ({selected}) => {
    return (
        <div>
            <p className='font-bold text-secondary my-16'>Apoinment Abaleable your date {format(selected, 'PP' )}</p>
        </div>
    );
};

export default ApoinmentAbaleable;