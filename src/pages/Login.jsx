import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="registerContainer bg-[#262a33] min-h-[50h] rounded-lg">
      <h1 className="text-center text-[#de6021] text-xl">Login</h1>
      <form
        action=""
        className="flex items-center justify-center flex-col rounded-lg"
      >
        <InputWithLabel />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;

function InputWithLabel() {
  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="userName" className={"text-white"}>
          UserName
        </Label>
        <Input type="text" id="userName" placeholder="UserName" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="password" className={"text-white"}>
          Password
        </Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <div className="">
        <p className="text-white">
          Don't have account?{" "}
          <Link to={"/register"} className="text-blue-500 cursor-pointer">
            Register
          </Link>
        </p>
      </div>
    </>
  );
}
