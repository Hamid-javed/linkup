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
    <div>
      <div className="p-10 bg-[#1E698E] flex justify-between items-center w-full py-20">
        <div className=" text-white">
          <h1 className="text-4xl font-extrabold">Join LinkUp Today!</h1>
          <div className="flex flex-col">
            <span>Ready to take your social media to the next level?</span>
            <span>Download LinkUp now and enjoy top-notch connectivity,</span>
            <span>
              sharing, and discovery. Available for both iOS and Android
            </span>
          </div>
          <div className="flex gap-2">
            {downdloadApp.map((data, index) => (
              <BtnDownload key={index} icon={data.icon} app={data.app} />
            ))}
          </div>
        </div>
        <img className="w-96" src={img} alt="" srcset="" />
      </div>
    </div>
  );
};

export default JoinUs;