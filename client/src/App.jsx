import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar, Loader } from './components';
import { CampaignDetails, CreateCampaign, Home, AllCampaigns, LoginPage } from './pages';
import StartingLoader from './components/startingLoader';


const App = () => {
  return (
      <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        <div className="sm:flex  mr-10 relative">
          <Sidebar />
        </div>

        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />

          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/allcampaigns" element={<AllCampaigns />} />
              <Route exact path="/create-campaign" element={<CreateCampaign />} />
              <Route exact path="/campaign-details/:id" element={<CampaignDetails />} />
          </Routes>
        </div>
      </div>
  )
}

export default App