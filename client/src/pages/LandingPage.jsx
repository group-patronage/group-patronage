import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-w-full min-h-full flex justify-center items-center">
      <div>
        <h2 className="text-white text-6xl	mb-5 font-bold">
          Need CrowdFunding in Web3? <br />
          Here's a Solution
        </h2>
        <button
          class="rounded-md bg-cyan-600	text-white p-3 "
          onClick={() => {
            navigate("/home");
          }}
        >
          Let's Start
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
