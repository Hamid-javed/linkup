import React from "react";
import img from "../pages/image.png";

const AboutUs = () => {
  return (
    <div className="bg-[#1e6a8e] pb-20 lg:pb-40">
      <div className="text-center py-10 lg:py-20 bg-gradient-to-t from-cyan-600 to-[#1e6a8e]-400 rounded mx-4 lg:mx-12">
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white">
          About Us
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between mx-4 mt-8 lg:mt-16 lg:mx-12">
        <div className="text-white lg:w-1/2">
          <h2 className="font-extrabold text-3xl sm:text-4xl mb-4">
            About Us
          </h2>
          <p className="text-base sm:text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Tempora, aliquam? Qui
            facilis repudiandae ab maxime iure expedita odit doloremque aliquam!
            Dolorem, recusandae impedit tenetur alias sunt aliquid sed animi
            veniam fugit expedita! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Commodi repellendus totam ducimus accusamus?
            Magnam, et. Vel nisi rerum non deleniti nesciunt distinctio, ratione
            aspernatur ex, nam magnam cum iusto tenetur quas quaerat ut mollitia
            harum laborum vero, fugit facere. Quo excepturi, doloremque quaerat
            dolorem commodi nesciunt odio.
          </p>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src={img}
            alt="About Us"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
