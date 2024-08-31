import React from "react";
import intro from "../../assets/Images/intro.png";

const Intro = () => {
  return (
    <div className="px-4 sm:px-10 w-full py-7 flex flex-col lg:flex-row justify-around items-center bg-[#1e698e]">
      <div className="flex flex-col gap-1 text-center lg:text-left">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          Welcome to LinkUp
        </h1>
        <h1 className="text-white text-2xl sm:text-3xl font-bold">
          Elevate Your Social{" "}
        </h1>
        <h1 className="text-white text-2xl sm:text-3xl font-bold">
          Media Experience!{" "}
        </h1>
        <p className="text-white w-full lg:w-8/12 mt-5 mx-auto lg:mx-0">
          Dive into a space where you can discover captivating content, share
          your personal stories, and stay updated with the latest trends and
          events.
        </p>
        <button className="bg-white p-2 rounded-3xl w-36 mt-3 mx-auto lg:mx-0 active:text-[#6dbfb8]">
          Download Now
        </button>
      </div>
      <img className="w-full lg:w-6/12 mt-5 lg:mt-0" src={intro} alt="" />
    </div>
  );
};

export default Intro;
