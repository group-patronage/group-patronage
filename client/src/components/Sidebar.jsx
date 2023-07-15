import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo, sun, profile, money, payment, homeIcon} from '../assets';
import { navlinks } from '../constants';
import { useAuth0 } from "@auth0/auth0-react"

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIconClick = () => {
    if (!disabled) {
      handleClick(name);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a onClick={handleIconClick}>
      <div
        className={`w-[48px] h-[48px] rounded-[10px] ${
          isActive && isActive === name ? 'bg-[#2c2f32]' : ''
        } flex justify-center items-center ${
          !disabled ? 'cursor-pointer' : ''
        } ${styles}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!isActive ? (
          <img loading="lazy" src={imgUrl} alt="" aria-label={name} className="w-1/2 h-1/2" />
        ) : (
          <img loading="lazy"
            src={imgUrl}
            alt=""
            aria-label={name}
            className={`w-1/2 h-1/2 ${
              isActive !== name ? 'grayscale' : ''
            } hover:filter-none`}
          />
        )}
        {isHovered && <span className="absolute bg-[#2c2f32] text-white p-2 rounded text-sm">{name}</span>}
      </div>
    </a>
  );
};



const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const { logout } = useAuth0();

  const handleIconClick = (name, link, disabled) => {
    if (!disabled) {
      setIsActive(name);
      if (name === 'logout') logout();
      else navigate(link);
    }
  };

  return (
    <div className="flex  justify-between items-center flex-col sticky top-5 h-[55vh]">
      <Link to="/home">
        <Icon styles="w-[52px] h-[52px]" imgUrl={homeIcon} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link, index) => (
            <Icon 
              key={index}
              {...link}
              isActive={isActive}
              handleClick={() => handleIconClick(link.name, link.link, link.disabled)}
            />
          ))}
        </div>
        
      </div>
    </div>
  )
}



export default Sidebar
