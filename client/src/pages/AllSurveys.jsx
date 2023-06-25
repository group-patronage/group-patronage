import React, { useState, useEffect } from 'react'

import { DisplaySurveys, Sidebar, Navbar, CustomButton } from '../components';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
     <>
      <div className=" mr-10 hidden sm:block md:block lg:block xl:block">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <DisplaySurveys
          title="All SURVEYS"
          isLoading={isLoading}
          surveys={""}
        />
      </div>
      <div className='fixed right-16 top-[90vh]'>
        <CustomButton
          btnType="button"
          title={'Create a new Survey'}
          styles={'bg-[#8c6dfd]'}
        />
      </div>
    </>
  )
}

export default Profile