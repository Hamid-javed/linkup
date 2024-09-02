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
        <div className="text-white lg:w-1/2 lg:mt-20">
          <h2 className="font-extrabold text-3xl sm:text-4xl mb-4">About Us</h2>
          <p className="text-base sm:text-lg text-justify">
            Linkup is a social media app that helps you connect with friends,
            family, and people around the world. It offers features like
            personalized feeds, customizable profiles, stories, reels, and event
            management. With LinkUp, you can share, discover, and engage in
            real-time. Join LinkUp to communicate easily, express yourself, and
            interact with others all in one place. We believe in the power of
            social media to bring people together and facilitate global
            communication. LinkUp empowers users to express themselves, share
            information, and interact with a broad audience in real-time. We aim
            to offer all the features you desire in one place, making it easy to
            stay connected with friends and family, share your life moments, and
            discover new interests.
          </p>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <img src={img} alt="About Us" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
