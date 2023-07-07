import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const LandingPage = lazy(() => import("./LandingPage"));
const AllCampaigns = lazy(() => import("./AllCampaigns"));
const AllSurveys = lazy(() => import("./AllSurveys"));
const CreateCampaign = lazy(() => import("./CreateCampaign"));
const CampaignDetails = lazy(() => import("./CampaignDetails"));
const LoginPage = lazy(() => import("./LoginPage"));

export {
  Home,
  LandingPage,
  AllCampaigns,
  AllSurveys,
  CreateCampaign,
  CampaignDetails,
  LoginPage,
};
