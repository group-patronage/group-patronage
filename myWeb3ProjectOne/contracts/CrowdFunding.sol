// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

error CrowdFunding__idNotExist();
error CrowdFunding__txnFailed();
error CrowdFunding__lessETHSent();

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
        string tag;
    }

    mapping(uint256 => Campaign) public campaigns;
    mapping(uint256 => bool) public idToCampaign;

    uint256 public numberOfCampaigns = 0;

    // Events
    event campaignCreated(uint256 indexed id, address indexed owner);
    event donationMade(address indexed donator, address indexed receiver, uint256 indexed amount);

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image,
        string memory _tag
    ) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaigns];

        require(
            block.timestamp < _deadline,
            'The deadline should be a date in the future.'
        );

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;
        campaign.tag = _tag;
        idToCampaign[numberOfCampaigns] = true;

        emit campaignCreated(numberOfCampaigns, _owner);

        numberOfCampaigns++;
        return numberOfCampaigns - 1;
    }
    
    
    function donateToCampaign(uint256 _id) public payable {
        if (msg.value == 0) {
            revert CrowdFunding__lessETHSent();
        }

        if (!idToCampaign[_id]) {
            revert CrowdFunding__idNotExist();
        }

        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        uint256 previousAmountCollected = campaign.amountCollected;
        campaign.amountCollected = previousAmountCollected + amount;

        (bool sent, ) = payable(campaign.owner).call{value: amount}('');

        if (!sent) {
            revert CrowdFunding__txnFailed();
        }

        emit donationMade(msg.sender, campaign.owner, amount);

        // Perform additional state changes
    }   

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        if (!idToCampaign[_id]) {
            revert CrowdFunding__idNotExist();
        }
        
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for (uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}