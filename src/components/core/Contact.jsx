import React from "react";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div className="contact_container w-full h-[20vh] bg-[#262A33] rounded-lg flex flex-col items-center justify-center">
      <h1 className="text-center text-xl w-[50%] text-white">
        Let's create something together!
      </h1>
      <div className="btn_container ">
        <Button className={"rounded-sm bg-[#DE6012] cursor-pointer"}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Contact;
