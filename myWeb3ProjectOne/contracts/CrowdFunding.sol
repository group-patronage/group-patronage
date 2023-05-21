// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


//Interface for ERC20
interface IERC20 {
    function transfer(address, uint) external returns (bool);

    function transferFrom(address, address, uint) external returns (bool);
}

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
    IERC20 public token;
    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfCampaigns = 0;

    constructor(address _token) {

        token = IERC20(_token);
    }
    ///@dev This will change the tokens that will be received in the campaign
    function changeToken(address _token) public{
    require(campaigns[numberOfCampaigns - 1].deadline == 0 || block.timestamp >= campaigns[numberOfCampaigns - 1].deadline, "Cannot change mid-campaign");
        token = IERC20(_token);
    }
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
            campaign.deadline < block.timestamp,
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
       
        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }
    function bok() public view returns(uint256){
        return block.timestamp;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent, ) = payable(campaign.owner).call{value: amount}('');

        if (sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }
        function donateToCampaignUsingERC20(uint256 _id, uint _amount) public payable {
        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(_amount);

        token.transferFrom(msg.sender, campaign.owner, _amount);
            campaign.amountCollected = campaign.amountCollected + _amount;
    }


    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        uint256 _numberOfCampaigns = numberOfCampaigns;
        Campaign[] memory allCampaigns = new Campaign[](_numberOfCampaigns);

        for (uint i = 0; i < _numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
    

    fallback() external payable{}
    receive() external payable {}
}
