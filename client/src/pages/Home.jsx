import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import { Sidebar, Navbar, Loader } from "../components";

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [campaigns, setCampaigns] = useState([]);
	const [searchText, setSearchText] = useState("");

	const { address, contract, getCampaigns } = useStateContext();

	const handleSearch = (text) => {
		setSearchText(text);
	};

	//filtered data
	const filteredCampaigns = campaigns.filter((campaign) =>
		campaign.title.toLowerCase().includes(searchText.toLowerCase())
	);

	const fetchCampaigns = async () => {
		setIsLoading(true);
		const data = await getCampaigns();
		setCampaigns(data);
		setIsLoading(false);
	};

	useEffect(() => {
		if (contract) fetchCampaigns();
	}, [address, contract]);

	return (
		<>
			<div className=" mr-10 ">
				<Sidebar />
			</div>

			<div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
				<Navbar onSearch={handleSearch} />

				<DisplayCampaigns
					title="All Campaigns"
					isLoading={isLoading}
					campaigns={filteredCampaigns}
				/>
			</div>
		</>
	);
};

export default Home;
