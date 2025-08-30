import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="footer_container w-full h-[30vh] bg-[#262A33] rounded-lg flex flex-col items-center justify-center">
      <h1 className="text-center text-xl w-[50%] text-[#DE6012]">45 Angles</h1>
      <div className="footer_nav flex items-center justify-center flex-col text-white">
        <ul className="flex items-center justify-center gap-8">
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>

        <div className="rights">
          <h1 className="rightsHeading text-gray-500">
            All Rights Reserved | Made By{" "}
            <span className="text-[#de6012]">Coderoom</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
