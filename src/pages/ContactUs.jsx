import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <div className="registerContainer bg-[#262a33] min-h-[50h] rounded-lg">
      <h1 className="text-center text-[#de6021] text-xl">Contact Us</h1>
      <form
        action=""
        className="flex items-center justify-center flex-col rounded-lg"
      >
        <InputWithLabel />
        <Button>Contact Us</Button>
      </form>
    </div>
  );
};

export default ContactUs;

function InputWithLabel() {
  return (
    <>
      <div className="grid  w-full max-w-sm items-center gap-3">
        <Label htmlFor="name" className={"text-white"}>
          Name
        </Label>
        <Input type="text" id="name" placeholder="Name" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="email" className={"text-white"}>
          Email
        </Label>
        <Input type="text" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="phone_number" className={"text-white"}>
          Phone Number
        </Label>
        <Input type="text" id="phone_number" placeholder="Phone Number" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="message" className={"text-white"}>
          Message
        </Label>
        <TextareaDemo />
      </div>
    </>
  );
}

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />;
}
