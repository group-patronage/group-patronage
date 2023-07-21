import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FundCard from "./FundCard";
import { loader } from "../assets";

const DisplayCampaigns = ({ title, isLoading, campaigns, searchText }) => {
  const navigate = useNavigate();
  const [searchedCampaigns, setSearchedCampaigns] = useState([]);

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  const fetchSearch = () => {
    setSearchedCampaigns(
      campaigns.filter((campaign) =>
        campaign.title?.toLowerCase().includes(searchText?.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetchSearch();
  }, [searchText]);

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            loading="lazy"
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain absolute top-[50%] left-[35%] sm:left-[50%] right-[55%] sm:right-[50%] translate-[50%,50%]"
          />
        )}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183] absolute top-[50%] left-[10%] sm:left-[40%] translate-[-50%,-50%]  ">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading && searchedCampaigns?.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183] absolute top-[50%] left-[23%] sm:left-[40%] translate-[-50%,-50%]  ">
            Not Found Any Campaigns !!
          </p>
        )}

        <div className="flex flex-wrap gap-6 justify-center mt-4">
          {!isLoading && campaigns.length > 0 && searchText
            ? searchedCampaigns.map((campaign, index) => (
                <FundCard
                  key={index}
                  {...campaign}
                  handleClick={() => handleNavigate(campaign)}
                />
              ))
            : campaigns.map((campaign, index) => (
                <FundCard
                  key={index}
                  {...campaign}
                  handleClick={() => handleNavigate(campaign)}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayCampaigns;
