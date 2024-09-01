import React from "react";

const Download = () => {
  return (
    <div className="bg-[#1E698E] px-4 py-10 sm:px-6 md:px-10 lg:py-24">
      <div className="bg-white w-full flex flex-col lg:flex-row justify-between items-center py-10 px-6 sm:px-10 lg:py-20 lg:px-20 rounded-3xl">
        <div className="mb-8 lg:mb-0 lg:w-2/3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E698E] mb-4 lg:mb-6">
            Stay connected, stay social with LinkUp!
          </h1>
          <p className="text-[#1E698E] text-sm sm:text-base lg:text-lg">
            Become a part of our growing community and start your journey today.
          </p>
        </div>
        <button className="border-2 border-[#1E698E] rounded-3xl px-5 py-2 sm:px-7 sm:py-3 text-sm sm:text-base lg:text-lg active:bg-[#1E698E] active:text-white">
          Download
        </button>
      </div>
    </div>
  );
};

export default Download;
