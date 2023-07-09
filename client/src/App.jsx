import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  CampaignDetails,
  CreateCampaign,
  Home,
  AllCampaigns,
  LoginPage,
  AllSurveys,
  LandingPage,
} from "./pages";
import StartingLoader from "./components/startingLoader";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { isLoading } = useAuth0();
  return (
    <div className="relative overflow-hidden p-4 bg-[#13131a] min-h-screen flex flex-row">
      <Suspense fallback={<StartingLoader />}>
        <Routes>
          <Route
            path="/"
            element={isLoading ? <StartingLoader /> : <LandingPage />}
          />

          <Route
            exact
            path="/home"
            element={<ProtectedRoute />}
          >
            <Route
              exact
              path="/home"
              element={<Home />}
            />
          </Route>

          <Route
            exact
            path="/allcampaigns"
            element={<ProtectedRoute />}
          >
            <Route
              exact
              path="/allcampaigns"
              element={<AllCampaigns />}
            />
          </Route>
          <Route
            exact
            path="/allsurveys"
            element={<ProtectedRoute />}
          >
            <Route
              exact
              path="/allsurveys"
              element={<AllSurveys />}
            />
          </Route>
          <Route
            exact
            path="/create-campaign"
            element={<ProtectedRoute />}
          >
            <Route
              exact
              path="/create-campaign"
              element={<CreateCampaign />}
            />
          </Route>

          <Route
            exact
            path="/campaign-details/:id"
            element={<ProtectedRoute />}
          >
            <Route
              exact
              path="/campaign-details/:id"
              element={<CampaignDetails />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
