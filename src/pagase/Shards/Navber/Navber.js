import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import logo from '../../../assets/logo.png'

const Navber = () => {
    const {user, LogOut}=useContext(AuthContext)
    const handleLogOut =()=> {
        LogOut()
        .then(()=> {})
        .catch(er => {
            console.error(er)
        })
    }
    const manuItems=<>
    <li><Link  to='/'>Home</Link></li>
    <li><Link to='/services'>service</Link></li>
    <li><Link to='/'>About</Link></li>
    {user?.uid ?
        <> 
        
        
        <button className='btn btn-secondary max-w-sm' onClick={handleLogOut}>LogOut</button>
        
        </>
        :
       <>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Sign-Up</Link></li>

       
       
       </>}

    </>
    return (
        <div className="navbar bg-orange-50 py-8">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {manuItems}
            </ul>
            </div>
            <div className='ml-20'>
                <img src={logo} className='w-32' alt="" />
            </div>
               
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
           {manuItems}
            </ul>
        </div>
       
        </div>
    );
};

export default Navber;