import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import GitHubIcon from "@mui/icons-material/GitHub";

import logoImage from "../assets/logo.png"; // Import the logo image

const LandingPage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  console.log("user", user);

  const [backgroundColor, setBackgroundColor] = useState("transparent"); // Set the background color to transparent

  return (
    <div style={{ backgroundColor }}>
      <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between py-4 px-6">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-white ml-5 mr-2 text-2xl font-bold">
            <span className="text-white">Group</span>
            <span className="text-[#4acd8d]">Patronage</span>
          </h2>

          <div className="flex items-center">
            <a
              href="https://github.com/group-patronage/group-patronage"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5 sm:mr-10"
            >
              <GitHubIcon style={{ color: "white" }} />
            </a>
            <button
              className="rounded-md bg-[#4acd8d] mr-5 sm:mr-20 font-semibold p-2"
              onClick={() => {
                isAuthenticated ? navigate("/home") : loginWithRedirect();
              }}
            >
              Let's Start
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 flex justify-center items-center">
  <div className="flex flex-col items-start">
    <h2 className="text-white text-2xl sm:text-4xl lg:text-6xl mb-2 font-bold text-center sm:text-left">
      Need CrowdFunding in Web3? <br />
      Here's a Solution
    </h2>
  </div>
  <img
    src={logoImage}
    alt="Logo"
    className="w-16 sm:w-20 lg:w-24 ml-2 sm:ml-4"
  />
</div>
      {/* Add your content here */}
    </div>
  );
};

export default LandingPage;
