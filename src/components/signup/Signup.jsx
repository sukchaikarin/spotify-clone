import SpotifyLogo from "../item/SpotifyLogo";

const Signup = () => {
  const logoClassName = "cursor-pointer";
  const logoStyle = { maxWidth: "107px", height: "auto" };

  return (
    <div className="flex flex-col items-center h-full justify-between  overflow-y-none">
      <div className=" h-[94px] p-8 w-full">
        <SpotifyLogo logoClassName={logoClassName} logoStyle={logoStyle} />
      </div>
      <div className=" flex flex-col px-8 h-full gap-[40px]  justify-between w-[387px]">
        <h1 className="font-bold h-[95px] text-[42px] leading-none  text-white ">
          Sign up to start listening
        </h1>
        <div className="h-[207px] flex flex-col gap-2">
          <span className="text-white">Email address</span>
          <input
            className="bg-transparent p-3 border border-gray-400 rounded-md"
            type="email"
            placeholder="name@domain.com"
          />
          <a
            href="#"
            className="text-sm font-semibold text-green-500 underline "
          >
            Use phone number instead.
          </a>
          <button className="font-bold text-black mt-3 bg-green-500 p-3 rounded-full">
            Next
          </button>
        </div>
        <div className="h-[272px]">
          <div className="flex justify-center items-center w-full ">
            <div className="grow">
              <hr />
            </div>

            <span className="mx-4">or</span>

            <div className="grow">
              <hr />
            </div>
          </div>
          <div>botton</div>
          <div>
            <hr />
          </div>
          <div>asd</div>
        </div>
      </div>
      <div className="h-[77px] flex justify-center items-center text-center text-xs w-full">
        <p className="bg-black w-full mx-12">
          This site is protected by reCAPTCHA and the Google
          <br />
          Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default Signup;
