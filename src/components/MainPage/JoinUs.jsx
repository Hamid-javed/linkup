import React from "react";
import img from "../../assets/Images/download.png";
import BtnDownload from "../BtnDownload";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const JoinUs = () => {
  const downdloadApp = [
    {
      icon: <IoLogoGooglePlaystore className="text-3xl" />,
      app: "Android",
    },
    {
      icon: <FaApple className="text-3xl" />,
      app: "Apple",
    },
  ];

  return (
    <div className="bg-[#1E698E] sm:px-6 md:px-10 lg:py-20">
      <div className="flex flex-col md:px-0 px-4 lg:flex-row items-center justify-center lg:justify-between w-full">
        <div className="text-white mb-8 lg:mb-0 lg:w-2/3 w-full flex flex-col items-center  lg:items-start">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Join LinkUp Today!
          </h1>
          <div className="flex flex-col space-y-2 text-sm sm:text-base lg:text-lg mb-6 lg:text-left text-center">
            <span>Ready to take your social media to the next level?</span>
            <span>Download LinkUp now and enjoy top-notch connectivity,</span>
            <span>
              sharing, and discovery. Available for both iOS and Android.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {downdloadApp.map((data, index) => (
              <BtnDownload key={index} icon={data.icon} app={data.app} />
            ))}
          </div>
        </div>
        <img
          className="w-full sm:w-80 md:w-96 lg:w-1/3"
          src={img}
          alt="Download LinkUp"
        />
      </div>
    </div>
  );
};

export default JoinUs;
