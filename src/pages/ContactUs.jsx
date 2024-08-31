import React from "react";
import img from "../pages/image.png";

const ContactUs = () => {
  return (
    // header
    <div className="bg-[#1e6a8e] pb-20 lg:pb-40">
      <div className="text-center py-10 lg:py-20 bg-gradient-to-t from-cyan-600 to-[#1e6a8e]-400 rounded mx-4 lg:mx-12">
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white">
          Contact Us
        </h1>
      </div>

      {/* lower part  */}

      <div className="flex ">
        <div>
        <div className="flex flex-col lg:flex-row lg:justify-between justify-center mx-4 mt-8 lg:mt-16 lg:mx-12">
        <div className="text-white lg:w-1/2 mx-5 justify-center">
          <h2 className="font-bold text-1xl sm:text-3xl mb-2 text-nowrap">
            Let's Connect- Your Voice is Important!
          </h2>
          <p className="text-base sm:text-md text-justify">
            Have questions or need support? Our team is here to assist you.
            whether you have feedback, need help with the app, or just want to
            say hello, we had love to hear from you. Reach out to us anytimel
          </p>

          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
            <img
              src={img}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
        </div>


        <div>
        <div className="flex flex-col lg:flex-row lg:justify-between justify-center mx-4 mt-8 lg:mt-16 lg:mx-12">
        <div className="text-white lg:w-1/2 mx-5 justify-center">
          <h2 className="font-bold text-1xl sm:text-3xl mb-2 text-nowrap">
            Let's Connect- Your Voice is Important!
          </h2>
<div>
    <form >
        {/* <div>
<div><label htmlFor=""><span className="font-bold text-start">Name</span><input type="text" name="name" id="name" /></label></div>
<div><label htmlFor=""><span className="font-bold text-start">Email</span><input type="email" name="email" id="email" /></label></div>
<div><label htmlFor=""><span className="font-bold text-start">Message</span><input type="text" name="message" id="message" /></label></div>

        </div> */}


    </form>
</div>
        </div>
      </div>
        </div>


      </div>

    </div>
  );
};

export default ContactUs;
