import { createCampaign, dashboard, logout, payment, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/home',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'survey',
    imgUrl: payment,
    link: '/allsurveys'
  },
  {
    name: 'AllCampaigns',
    imgUrl: withdraw,
    link: '/allcampaigns',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: false,
  },
];