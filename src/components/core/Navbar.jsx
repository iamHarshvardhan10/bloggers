import React from "react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/asset 0.png";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center">
      <div className="w-full max-w-[1200px] flex items-center justify-between px-8 py-2">
        <img src={logo} alt="" className="w-[50px] h-[50px]" />

        <Button variant={"outline"} className={"bg-white text-white text-lg"}>
          Register
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
