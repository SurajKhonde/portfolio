import React from 'react'
import Logo from "/src/image/newPICS.png";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (< div className='flex gap-5 justify-between mt-2 items-center mx-8 '>
    <NavLink to='/'>
      <div className='w-28'>
        <img  src={ Logo} />
      </div>
      
    </NavLink>
    <Navbar />
   
    </div>
    
     
  )
}

export default Header