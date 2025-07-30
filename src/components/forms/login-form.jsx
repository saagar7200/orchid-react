import React from "react";
import Input from "../inputs/input";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema/auth.schema";

const LoginForm = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="tracking-wider w-full my-auto h-fit px-4">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4 text-gray-600"
        >
          {/*email input component */}
          <Input
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
            type={"text"}
            required={true}
            name={"email"}
          />
          {/* password input */}
          <Input
            label={"Password"}
            placeholder={"Enter your password"}
            type={"password"}
            required={true}
            name={"password"}
          />

          {/* submit button */}
          <div className="w-full mt-4">
            <button
              type={"submit"}
              className="bg-blue-500 text-white font-bold 
              w-full px-3 py-3 rounded-md cursor-pointer
            "
            >
              Login
            </button>
          </div>
        </form>
      </FormProvider>

      {/* link to signup page */}
      <div className="mt-2">
        <p>
          Don&apos;t have an Account?
          <span className=" px-2 text-blue-500 cursor-pointer font-semibold">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
