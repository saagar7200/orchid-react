import React from "react";
import Input from "../inputs/input";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="tracking-wider w-full my-auto h-fit px-4">
      <form className="w-full flex flex-col gap-4 text-gray-600">
        {/* name input */}
        <Input
          label={"Full Name"}
          placeholder={"John Doe"}
          type={"text"}
          required={true}
        />
        
        {/*email input component */}
        <Input
          label={"Email"}
          placeholder={"johndoe@gmail.com"}
          type={"email"}
          required={true}
        />
        {/* password input */}
        <Input
          label={"Password"}
          placeholder={"Enter your password"}
          type={"password"}
          required={true}
        />

        {/* submit button */}
        <div className="w-full mt-4">
          <button
            type={"submit"}
            className="bg-blue-500 text-white font-bold 
              w-full px-3 py-3 rounded-md cursor-pointer
            "
          >
            Sign Up
          </button>
        </div>
      </form>
      {/* link to signup page */}
      <div className="mt-2">
        <p>
          Already have an Account?
         <Link to={'/'}>
          <span className=" px-2 text-blue-500 cursor-pointer font-semibold">
            Sign In
          </span>
         </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
