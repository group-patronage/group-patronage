import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import logoImage1 from "../assets/btc.png";
import logoImage2 from "../assets/eth.png";
import logoImage3 from "../assets/ava.png";
import logoImage4 from "../assets/bin.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [text] = useTypewriter({
    words: ['Need CrowdFunding in Web3?','Online CrowdFunding Platform','Web CrowdFunding Platform'],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 90,
    delaySpeed: 1000,
  });

  

  return (
    <section className="flex md:flex-col lgl:fixed items-center justify-center lgl:h-screen bg-[#13131a]">
      {/* Header */}
      <div className="fixed inset-x-0 top-0  bg-[#13131a] backdrop-opacity-95 flex items-center justify-between py-8 px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-white ml-5 mr-2 text-2xl font-bold">
            <span className="text-white">Group</span>
            <span className="text-[#4acd8d]">Patronage</span>
          </h2>
        </div>
       
          <div className="flex items-center px-5">
            <div className="border border-[#4acd8d] bg-slate-50 hover:bg-slate-800 hover:text-white hover:transition-all duration-700 rounded-[10px] inline-block">
              <button
                className="text-gray text-[18px] font-semibold p-2"
                onClick={() => {
                  isAuthenticated ? navigate("/home") : loginWithRedirect();
                }}
              >
                Let's Start
              </button>
            </div>
          </div>

          </div>

       

      {/* Content */}
      <div className="min-h-screen lgl:mx-auto mt-40 lgl:mt-2 md:ml-auto flex flex-col lgl:flex-row lgl:px-4 md:px-12 md:flex-row lgl:ml-20 justify-between items-center">
        <div className="w-full lgl:max-w-2xl px-6 lgl:ml-10 lgl:pt-2  md:text-left">
          <h2 className="text-white text-3xl md:text-5xl mb-6 font-bold px-8 lgl:pt-5">
            <span className="text-white">{text} </span>
            <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor="#4acd8d"
                    
                />
            <span className="text-[#4acd8d]">Here's a Solution</span>
          </h2>
          <p className="text-white font-sans text-2xl px-8">
            Group Patronage aims to provide a decentralized crowdfunding
            platform that addresses the common challenges faced by small-scale
            startups and medium-sized businesses when it comes to raising funds.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 max-w-2xl px-8 mt-8 md:mt-0 bg-[#13131a]">
          <div className="rounded-full overflow-hidden border border-[#4acd8d]">
            <img
              src={logoImage1}
              alt="Image 1"
              className="w-full h-auto hover:rotate-12 transform origin-center transition-all duration-300"
            />
          </div>
          <div className="rounded-full overflow-hidden border border-[#4acd8d]">
            <img
              src={logoImage2}
              alt="Image 2"
              className="w-full h-auto hover:rotate-12 transform origin-center transition-all duration-300"
            />
          </div>
          <div className="rounded-full overflow-hidden border border-[#4acd8d]">
            <img
              src={logoImage3}
              alt="Image 3"
              className="w-full h-auto hover:rotate-12 transform origin-center transition-all duration-300"
            />
          </div>
          <div className="rounded-full overflow-hidden border border-[#4acd8d]">
            <img
              src={logoImage4}
              alt="Image 4"
              className="w-full h-auto hover:rotate-12 transform origin-center transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black-500 py-4 absolute bottom-3 ml-20 w-full">
        <div className="container mx-auto flex items-center fixed bottom-4  justify-center font-bold accent-pink-400 animate-bounce text-[#4acd8d]">
          <p className="mr-2">Contribute here</p>
          <a
            href="https://github.com/group-patronage/group-patronage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center hover:text-[#4acd8d]"
          >
            <GitHubIcon className="mr-1 transition duration-300 ease-in-out transform hover:scale-110" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default LandingPage;
