import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-12 gap-5'>
            <img src={logo} alt="" />
            <p className='text-lg text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-xl mb-2'>{ format(new Date(), "EEEE, MMMM dd, yyyy") }</p>
        </div>
    );
};

export default Header;