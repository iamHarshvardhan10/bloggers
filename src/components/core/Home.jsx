import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  BadgeCheckIcon,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="mt-[50px] bg-[#262A33] home_container rounded-lg shadow-md">
        <div className="flex items-center justify-between text-white">
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600 badge cursor-pointer"
          >
            <BadgeCheckIcon />
            Verified
          </Badge>
          <div className="flex items-center justify-center gap-2">
            <Facebook className="hover:text-[#de6012] cursor-pointer" />
            <Instagram className="hover:text-[#de6012] cursor-pointer" />
            <Twitter className="hover:text-[#de6012] cursor-pointer" />
            <Youtube className="hover:text-[#de6012] cursor-pointer" />
          </div>
        </div>

        <h1 className="text-4xl text-left w-[100%] text-white font-bold ">
          Stories That <span className="text-[#DE6012]">Inspire</span> , Ideas
          That <span className="text-[#DE6012]">Last</span>
        </h1>
        <p className="text-md text-gray-400">
          Discover thoughtfully written stories, fresh ideas, and perspectives
          that inspire your day.
        </p>
        <div className="btn_container">
          <Button className={"rounded-sm bg-[#DE6012] cursor-pointer"}>
            Contact Us
          </Button>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Home;
