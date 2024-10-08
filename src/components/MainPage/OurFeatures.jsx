import React from "react";

const OurFeatures = ({ icon, title, description }) => {
  return (
      <div className="border-2 p-4 border-white sm:h-72 rounded-3xl  bg-gradient-to-r from-[#8CCFDD] to-[#217DAA] cursor-default hover:scale-110 transition duration-300">
        <div className="flex items-center mt-3 mb-2 gap-2">
          {icon}
          <h1 className="text-white text-2xl sm:text-3xl font-bold flex">{title}</h1>
        </div>
        <p className="text-white text-lg leading-6">
         {description}.
        </p>
      </div>
  );
};

export default OurFeatures;
