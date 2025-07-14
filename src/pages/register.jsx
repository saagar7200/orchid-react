import RegisterForm from "../components/forms/register-form";
import RegisterImage from '../assets/signup.jpg'
const Register = () => {
  return (
    <div className="flex h-full w-full gap-4">
      {/* image section */}
      <div className="h-full flex-2/3">
        <img
        src={RegisterImage}
        alt="cover image"
        className="h-full object-cover"
        />

      </div>
      {/* form section */}
     <div className="flex-1/3 h-full w-full flex flex-col items-center justify-center">
       <div className="h-fit w-full flex flex-col items-center justify-center">
        <h2 
        className="tracking-wider text-2xl font-bold
        text-gray-700"
        
        >Rgister</h2>
      <RegisterForm />
       </div>
     </div>
    </div>
  );
};

export default Register;
