import { Link } from "react-router-dom";
const SignUpSignIn = () => {
  return (
    <div className="flex ">
      <Link to={"/signup"}>
        <button className="font-bold text-gray-400 hover:text-white  w-28 h-12 mr-3 rounded-full transform transition-transform hover:scale-105 hover:font-extrabold">
          Sign up
        </button>
      </Link>
      <Link to={"/login"}>
        <button className="bg-white font-bold text-black w-28 h-12 mr-3 rounded-full transform transition-transform hover:scale-105 hover:font-extrabold">
          Log in
        </button>
      </Link>
    </div>
  );
};

export default SignUpSignIn;
