import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const BookMarkModal = ({trithment, selected,setTrithment,refetch }) => {
  const { name:trithmentName, slots}=trithment;
  const date = format(selected, 'PP')
  const {user} =useContext(AuthContext)

  const handleBookingModal =event=> {
    event.preventDefault();
    const form =event.target;
    const slot =form.slot.value;
    const name =form.name.value;
    const email= form.email.value;
    const phone=form.phone.value;
    const booking ={
      apoinmentDate: date,
      customar: name,
      trithmentname: trithmentName,
      slot,
      email,
      phone,
    
    }
    fetch(`http://localhost:5000/bookings`,{
      method: 'post',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
       console.log(data)
       if (data.acknowledged) {
        setTrithment(null)
        toast.success('booking confirmed')
        refetch()
        
       }
    })
    
    
  }
    return (
    <div>
    <input type="checkbox" id="BookMarkModal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative w-96">
        <label htmlFor="BookMarkModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg text-secondary mb-2  font-bold">{trithmentName}</h3>
        <form onSubmit={handleBookingModal} className='grid grid-cols-1 gap-3'>
        <input type="text" disabled value={date} className="input input-bordered w-full max-w-xs mb-2" />
        <select name='slot' className="select select-bordered w-full max-w-xs">
        
         {
            slots?.map((slot, i) => <option 
            value={slot} 
            key={i}>{slot}
            </option> )
         }
      </select>
        <input name='name' type="text" disabled defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs mb-2" />
        <input name='email' type="email" disabled defaultValue={user?.email} className="input input-bordered w-full max-w-xs mb-2" />
        <input name='phone' type="text" placeholder="your phone" className="input input-bordered w-full max-w-xs mb-2" />
        <input type="submit" value="Submit" className=" w-full btn btn-secondary max-w-xs mb-2" />
        </form>
     </div>
     
    </div>
    </div>

    );
};

export default BookMarkModal;