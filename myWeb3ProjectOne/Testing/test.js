const { ethers } = require('hardhat');

describe('CrowdFunding', () => {
  let crowdFunding;
  let owner;
  let donator1;
  let donator2;

  before(async () => {
    [owner, donator1, donator2] = await ethers.getSigners();

    const CrowdFunding = await ethers.getContractFactory('CrowdFunding');
    crowdFunding = await CrowdFunding.deploy();
    await crowdFunding.deployed();
  });

  describe('createCampaign', () => {
    it('should create a new campaign', async () => {
      const title = 'Test Campaign';
      const description = 'This is a test campaign';
      const target = ethers.utils.parseEther('1');
      const deadline = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
      const image = 'https://example.com/image.jpg';

      await expect(
        crowdFunding.createCampaign(owner.address, title, description, target, deadline, image)
      )
        .to.emit(crowdFunding, 'campaignCreated')
        .withArgs(0, owner.address);

      const campaign = await crowdFunding.campaigns(0);
      expect(campaign.owner).to.equal(owner.address);
      expect(campaign.title).to.equal(title);
      expect(campaign.description).to.equal(description);
      expect(campaign.target).to.equal(target);
      expect(campaign.deadline).to.equal(deadline);
      expect(campaign.amountCollected).to.equal(0);
      expect(campaign.image).to.equal(image);
    });
  });

  describe('donateToCampaign', () => {
    it('should donate to a campaign', async () => {
      const campaignId = 0;
      const donationAmount = ethers.utils.parseEther('0.5');

      await expect(crowdFunding.connect(donator1).donateToCampaign(campaignId, { value: donationAmount }))
        .to.emit(crowdFunding, 'donationMade')
        .withArgs(donator1.address, owner.address, donationAmount);

      const [donators, donations] = await crowdFunding.getDonators(campaignId);
      expect(donators[0]).to.equal(donator1.address);
      expect(donations[0]).to.equal(donationAmount);
    });

    it('should revert if campaign not found', async () => {
      const campaignId = 1;
      const donationAmount = ethers.utils.parseEther('0.5');

      await expect(crowdFunding.connect(donator2).donateToCampaign(campaignId, { value: donationAmount }))
        .to.be.revertedWith('CrowdFunding__campaignNotFound');
    });

    it('should revert if less ETH sent', async () => {
      const campaignId = 0;
      const donationAmount = ethers.utils.parseEther('0');

      await expect(crowdFunding.connect(donator2).donateToCampaign(campaignId, { value: donationAmount }))
        .to.be.revertedWith('CrowdFunding__lessEthSent');
    });

    it('should revert if campaign deadline reached', async () => {
      const campaignId = 0;
      const donationAmount = ethers.utils.parseEther('0.5');

      // Advance time to make the campaign deadline reached
      await ethers.provider.send('evm_increaseTime', [3600]);
      await ethers.provider.send('evm_mine');

      await expect(crowdFunding.connect(donator2).donateToCampaign(campaignId, { value: donationAmount }))
        .to.be.revertedWith('CrowdFunding__campaignDeadlineReached');
    });

    it('should revert if donations failed', async () => {
      const campaignId = 0;
      const donationAmount = ethers.utils.parseEther('0.5');

      // Make the `payable` call fail by sending too little gas
      await expect(
        crowdFunding.connect(donator2).donateToCampaign(campaignId, { value: donationAmount, gasLimit: 100000 })
      ).to.be.revertedWith('CrowdFunding__donationsFailed');
    });
  });
});
