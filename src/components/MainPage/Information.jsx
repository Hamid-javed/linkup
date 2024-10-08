import React from "react";
import Slider from "../General/Slider";


const Information = () => {
  // const slides = [

  //   <div className=" text-white text-center  ">
  //     <div className="rotate-180 text-7xl font-extrabold">,,</div>
  //     <div className="text-white text-2xl sm:text-3xl font-bold text-wrap">
  //       “Your Social Media Hub Awaits - Download LinkUp!”
  //     </div>
  //   </div>,
  //   <div className=" text-white text-center ">
  //     <div className="rotate-180 text-7xl font-extrabold">,,</div>
  //     <div className="text-white text-2xl sm:text-3xl font-bold text-wrap">
  //       “Stay Social, Stay Connected – Download LinkUp!"
  //     </div>
  //   </div>,
  //   <div className=" text-white text-center ">
  //     <div className="rotate-180 text-7xl font-extrabold">,,</div>
  //     <div className="text-white text-2xl sm:text-3xl font-bold text-wrap">
  //       “Start Your LinkUp Journey – Download the App Now!"
  //     </div>
  //   </div>,
  //   <div className=" text-white text-center ">
  //     <div className="rotate-180 text-7xl font-extrabold">,,</div>
  //     <div className="text-white text-2xl sm:text-3xl font-bold text-wrap">
  //       “Your Social Media Hub Awaits - Download LinkUp!”
  //     </div>
  //   </div>,
  //   <div className=" text-white text-center ">
  //     <div className="rotate-180 text-7xl font-extrabold">,,</div>
  //     <div className="text-white text-2xl sm:text-3xl font-bold text-wrap">
  //       “Connect and Share on the Go – Download LinkUp!"
  //     </div>
  //   </div>,
  //   <div className=" text-white text-center ">
  //     <div className="rotate-180 text-7xl font-extrabold">,,</div>
  //     <div className="text-white text-2xl sm:text-3xl font-bold text-wrap">
  //       "Experience LinkUp on the Go – Download Today!"
  //     </div>
  //   </div>,
  //   <div className=" text-white text-center ">
  //     <div className="rotate-180 text-7xl font-extrabold">,,</div>
  //     <div className="text-white text-2xl sm:text-3xl font-bold text-wrap">
  //       "Get Started with LinkUp – Download the App Now!"
  //     </div>
  //   </div>,
  // ];

  const slides = [
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <div className="rotate-180 text-5xl sm:text-7xl font-extrabold">,,</div>
      <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
        "Your Social Media Hub Awaits - Download LinkUp!"
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <div className="rotate-180 text-5xl sm:text-7xl font-extrabold">,,</div>
      <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
        "Stay Social, Stay Connected – Download LinkUp!"
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <div className="rotate-180 text-5xl sm:text-7xl font-extrabold">,,</div>
      <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
        "Start Your LinkUp Journey – Download the App Now!"
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <div className="rotate-180 text-5xl sm:text-7xl font-extrabold">,,</div>
      <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
        "Your Social Media Hub Awaits - Download LinkUp!"
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <div className="rotate-180 text-5xl sm:text-7xl font-extrabold">,,</div>
      <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
        "Connect and Share on the Go – Download LinkUp!"
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <div className="rotate-180 text-5xl sm:text-7xl font-extrabold">,,</div>
      <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
        "Experience LinkUp on the Go – Download Today!"
      </div>
    </div>,
    <div className="flex flex-col items-center justify-center h-full text-white text-center p-4">
      <div className="rotate-180 text-5xl sm:text-7xl font-extrabold">,,</div>
      <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
        "Get Started with LinkUp – Download the App Now!"
      </div>
    </div>,
  ];
  return (
    <div className="py-16 bg-[#1e698e]">
      <Slider
        slides={slides}
        height="200px"
        width="100%"
        dotColor="#666"
        activeDotColor="#FFFFFF"
        numDots={7}
      />
    </div>
  );
};

export default Information;
