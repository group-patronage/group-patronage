import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search, profile, github } from '../assets';
import { navlinks } from '../constants';



const Navbar = () => {
  const navigate = useNavigate();
  // const [isActive, setIsActive] = useState('dashboard');
  // const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div className="flex md:flex-row justify-end mb-[35px] gap-6">
      <div className="text-center">
        <CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        />
      </div>
    </div>
  )
}

export default Navbar