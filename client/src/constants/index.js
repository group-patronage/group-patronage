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
    link: '/home/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/',
    disabled: true,
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
    disabled: true,
  },
];