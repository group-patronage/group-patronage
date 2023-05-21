import React from "react";

import { image2, image3, image4, image5, surveyIcon, tagType } from "../assets";

const SurveyCard = ({ handleClick }) => {
	return (
		<div className="flex gap-8 flex-wrap">
			<div
				className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
				onClick={handleClick}>
				<img
					src={surveyIcon}
					alt="fund"
					className="w-full h-[158px] object-cover rounded-[15px]"
				/>

				<div className="flex flex-col p-4">
					<div className="flex flex-row items-center mb-[18px]">
						<img
							src={tagType}
							alt="tag"
							className="w-[17px] h-[17px] object-contain"
						/>
						<p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
							Innovation
						</p>
					</div>

					<div className="block">
						<h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
							Understanding Investor Preferences
						</h3>
						<p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] ">
							This survey aims to gather insights on what such as the importance
							of team experience, market size, or product uniqueness.
						</p>
					</div>

					<div className="flex justify-between flex-wrap mt-[15px] gap-2">
						<div className="flex flex-col">
							<h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
								Views - 200
							</h4>
							<p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
								Upvotes - 18
							</p>
						</div>
						<div className="flex flex-col">
							<h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
								19
							</h4>
							<p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
								Days Left
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
				onClick={handleClick}>
				<img
					src={image2}
					alt="fund"
					className="w-full h-[158px] object-cover rounded-[15px]"
				/>

				<div className="flex flex-col p-4">
					<div className="flex flex-row items-center mb-[18px]">
						<img
							src={tagType}
							alt="tag"
							className="w-[17px] h-[17px] object-contain"
						/>
						<p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
							Education
						</p>
					</div>

					<div className="block">
						<h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
							Identifying the Best Rewards
						</h3>
						<p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] ">
							{" "}
							This survey focuses on determining the most effective types of
							rewards to offer backers on crowdfunding platforms.{" "}
						</p>
					</div>

					<div className="flex justify-between flex-wrap mt-[15px] gap-2">
						<div className="flex flex-col">
							<h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
								Views - 345
							</h4>
							<p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
								Upvotes - 10
							</p>
						</div>
						<div className="flex flex-col">
							<h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
								4
							</h4>
							<p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
								Days Left
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
				onClick={handleClick}>
				<img
					src={image3}
					alt="fund"
					className="w-full h-[158px] object-cover rounded-[15px]"
				/>

				<div className="flex flex-col p-4">
					<div className="flex flex-row items-center mb-[18px]">
						<img
							src={tagType}
							alt="tag"
							className="w-[17px] h-[17px] object-contain"
						/>
						<p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
							Social
						</p>
					</div>

					<div className="block">
						<h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
							A Startups' Perspective
						</h3>
						<p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] ">
							This survey seeks to understand startups' experiences with
							different crowdfunding platforms, including the ease of use,
							platform fees, and quality of customer support.
						</p>
					</div>

					<div className="flex justify-between flex-wrap mt-[15px] gap-2">
						<div className="flex flex-col">
							<h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
								Views - 89
							</h4>
							<p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
								Upvotes - 1
							</p>
						</div>
						<div className="flex flex-col">
							<h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
								3
							</h4>
							<p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
								Days Left
							</p>
						</div>
					</div>
				</div>
			</div>{" "}
			<div
				className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
				onClick={handleClick}>
				<img
					src={image4}
					alt="fund"
					className="w-full h-[158px] object-cover rounded-[15px]"
				/>

				<div className="flex flex-col p-4">
					<div className="flex flex-row items-center mb-[18px]">
						<img
							src={tagType}
							alt="tag"
							className="w-[17px] h-[17px] object-contain"
						/>
						<p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
							Technology
						</p>
					</div>

					<div className="block">
						<h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
							Evaluating Pitch Videos
						</h3>
						<p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px]">
							This survey evaluates the effectiveness of crowdfunding pitch
							videos, engaging and informative videos that capture the attention
							of potential backers.
						</p>
					</div>

					<div className="flex justify-between flex-wrap mt-[15px] gap-2">
						<div className="flex flex-col">
							<h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
								Views - 35
							</h4>
							<p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
								Upvotes - 5
							</p>
						</div>
						<div className="flex flex-col">
							<h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
								11
							</h4>
							<p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
								Days Left
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
				onClick={handleClick}>
				<img
					src={image5}
					alt="fund"
					className="w-full h-[158px] object-cover rounded-[15px]"
				/>

				<div className="flex flex-col p-4">
					<div className="flex flex-row items-center mb-[18px]">
						<img
							src={tagType}
							alt="tag"
							className="w-[17px] h-[17px] object-contain"
						/>
						<p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
							Health
						</p>
					</div>

					<div className="block">
						<h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
							A Startup's Guide
						</h3>
						<p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] ">
							This survey examines the role of social media, what content
							resonates with potential backers, and how often startups should
							post updates.
						</p>
					</div>

					<div className="flex justify-between flex-wrap mt-[15px] gap-2">
						<div className="flex flex-col">
							<h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
								Views - 511
							</h4>
							<p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
								Upvotes - 18
							</p>
						</div>
						<div className="flex flex-col">
							<h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
								7
							</h4>
							<p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
								Days Left
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SurveyCard;
