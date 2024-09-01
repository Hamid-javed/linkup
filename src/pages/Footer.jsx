import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LuActivitySquare } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-[#1e6a8e] text-white p-2 mx-4 mt-5">
      <div className="block lg:flex lg:justify-between lg:items-start lg:space-x-10 text-center lg:text-left">
        <div className="lg:w-1/3 mb-6 lg:mb-0 mx-auto lg:mx-0 pb-0">
          <p className="text-sm lg:text-base ">
            We believe in the power of social media to bring people together and
            facilitate global communication. LinkUp empowers users to express
            themselves, share information, and interact with a broad audience in
            real-time.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-10 text-center lg:text-left">
          <div className="mb-6 lg:mb-0 mx-auto lg:mx-0">
            <b className="block mb-3 lg:mb-2">Pages</b>
            <ul className="list-none space-y-2 text-sm lg:text-base">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="mx-auto lg:mx-0">
            <b className="block mb-3 lg:mb-2">Social Links</b>
            <p className="text-sm lg:text-base mb-3">
              Follow our social media for the latest updates and news.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 text-white text-xl">
              <LuActivitySquare />
              <FaInstagram />
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-white"></div>
      <div className="text-center mt-4">
        <small className="text-xs lg:text-sm">
          Copyright © 2024. All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
