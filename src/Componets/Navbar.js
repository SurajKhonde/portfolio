import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SiOpenproject } from "react-icons/si";
import { MdOutlineContacts } from "react-icons/md";
import { MdRoundaboutLeft } from "react-icons/md";
import { SiHomebridge } from "react-icons/si";


const Navbar = () => {
    return (
      <nav className='flex'>
              <ul >
                  <li className=' flex gap-10 text-center mt-10 font-bold text-[2.5rem]' >
                            <li className='hidden sm:block hover:text-orange-600 '><NavLink to="/"><SiHomebridge /></NavLink></li>
                            <li className='hidden sm:block hover:text-orange-600'><NavLink to="/about"><MdRoundaboutLeft /></NavLink></li>
                            <li className='hidden sm:block hover:text-orange-600'><NavLink to="/contact"><MdOutlineContacts /></NavLink></li>
            <li className='hidden sm:block hover:text-orange-600'> <NavLink to="/services">
              <span>
                <SiOpenproject />
              </span></NavLink> </li>
                           {/* <li className='hidden sm:block hover:text-orange-600'> <NavLink to="/HireMe">HireMe</NavLink></li> */}
                    </li>
          
              </ul>
      </nav>
            
  )
}

export default Navbar;