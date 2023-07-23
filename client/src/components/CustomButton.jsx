import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}

      className={`font-epilogue font-semibold sm:text-[16px] text-[12px]  leading-[26px] text-white  px-4 py-2 rounded-[30px] ${styles}`}
      onClick={handleClick}
      aria-label={title}
    >
      {title}
    </button>
  )
}

export default CustomButton