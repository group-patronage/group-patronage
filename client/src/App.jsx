import React from "react";
import { Route, Routes } from "react-router-dom";


import {
  CampaignDetails,
  CreateCampaign,
  Home,
  AllCampaigns,
  LoginPage,
  LandingPage,
} from "./pages";
import StartingLoader from "./components/startingLoader";

const App = () => {
  return (
      <div className="relative p-4 bg-[#13131a] min-h-screen flex flex-row">
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
       
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/allcampaigns" element={<AllCampaigns />} />
          <Route exact path="/home/create-campaign" element={<CreateCampaign />} />
          <Route
            exact
            path="/campaign-details/:id"
            element={<CampaignDetails />}
          />
    </Routes>
      </div>
  );
};

export default App;
