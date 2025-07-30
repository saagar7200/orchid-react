import { useFormContext } from "react-hook-form";

const Input = ({ label, type, placeholder, required, name }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  console.log(errors);
  return (
    <div className="w-full flex flex-col gap-1  items-start">
      {/* label component */}
      <div>
        <label className="text-[16px] font-semibold">{label}</label>
        {required && <span className="text-red-500 text-[16px]  ml-1">*</span>}
      </div>
      <input
        {...register(name)}
        type={type}
        value={watch(name)}
        placeholder={placeholder}
        className={`w-full p-2 py-3 border ${
          errors[name]
            ? "border-red-500 focus:outline-red-500"
            : "border-blue-400 focus:outline-blue-400"
        } 
              rounded-md text-[16px] placeholder:text-[16px] text-gray-600`}
      />
      <p className="text-[12px] text-red-500 h-2">
        {errors[name] ? errors[name].message : ""}
      </p>
    </div>
  );
};

export default Input;
