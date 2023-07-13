import { createCampaign, dashboard, logout, payment, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'DASHBOARD',
    imgUrl: dashboard,
    link: '/home',
  },
  {
    name: 'CAMPAIGN',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'SURVEY',
    imgUrl: payment,
    link: '/allsurveys'
  },
  {
    name: 'ALLCAMPAIGNS',
    imgUrl: withdraw,
    link: '/allcampaigns',
  },
  {
    name: 'LOGOUT',
    imgUrl: logout,
    link: '/home',
    disabled: false,
  },
];
