import React, { useEffect, useState } from "react";
import SpotifyLogo from "../SpotifyLogo";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const BACKEND_URL = "http://localhost:3000/";
const clientID =
  "660556148422-ag17p365alu1ti4fptoco0il1o5va1j3.apps.googleusercontent.com";
const Login = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${BACKEND_URL}`, {
        withCredentials: true,
      });
      // console.log(response.data.userData);
      if (response.status === 200 && response.data) {
        //setData(response.data);
        console.log(response.data);
      }
    };
    getData();

    const initClient = () => {
      gapi.client.init({
        clientID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = async (res) => {
    const member = res.profileObj;

    //console.log(member);
    const response = await axios.post(`${BACKEND_URL}api/signup`, member, {
      withCredentials: true,
    });
    console.log("Response status:", response.status);

    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Success",
        showConfirmButton: true,
        timer: 1500,
      }).then(() => {
        navigate("/member");
      });

      // setProfile(res.profileObj);
      //console.log(response.data);
      //console.log("success", res);
    } else {
      console.error("Failed to process the request");
    }
  };
  const onFailure = (res) => {
    console.log("failed", res);
  };
  const logOut = () => {
    setProfile(null);
  };

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
          <div>
            <h2>Google Login</h2>
            {profile ? (
              <div>
                <img src={profile.imageUrl} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name : {profile.name}</p>
                <p>Email : {profile.email}</p>

                <GoogleLogout
                  clientId={clientID}
                  buttonText="Log out"
                  onLogoutSuccess={logOut}
                />
              </div>
            ) : (
              <GoogleLogin
                clientId={clientID}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            )}
          </div>
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

export default Login;