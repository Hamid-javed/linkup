import React, { useState } from "react";
import img from "../pages/image.png";
import Download from "../components/MainPage/Download";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e328686c-026c-409e-a26b-5e4472fada65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-[#1e6a8e] ">
      {/* Header Section */}
      <div className="text-center py-10 lg:py-20 bg-gradient-to-t from-cyan-600 to-[#1e6a8e]-500 rounded mx-4 lg:mx-12">
        <span className=" text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white">
          Contact Us
        </span>
      </div>

      {/* Lower Part */}
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center mx-4 mt-8 lg:mt-16 lg:mx-12">
        <div className="lg:w-1/2 mx-5 text-white flex flex-col justify-center">
          <h2 className="font-bold text-2xl sm:text-3xl mb-4">
            Let's Connect - Your Voice is Important!
          </h2>
          <p className="text-base sm:text-md text-justify mb-8">
            Have questions or need support? Our team is here to assist you.
            Whether you have feedback, need help with the app, or just want to
            say hello, we'd love to hear from you. Reach out to us anytime!
          </p>

          <div className="mt-8 lg:mt-0 flex justify-center lg:justify-start">
            <img
              src={img}
              alt="About Us"
              className="w-full lg:w-3/4 h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="shadow-lg lg:w-[480px]  bg-gradient-to-t from-cyan-600 to-[#1e6a8e]-500 lg:h-[470px] md:w-1/2 sm:w-full mx-auto mt-10 lg:mt-5 p-10 pb-auto space-y-6">
          <form className="space-y-4">
            <div>
              <h2 className="text-white text-2xl font-bold sm:text-3xl mb-4 text-center">
                Your Details
              </h2>
            </div>

            <div>
              <label
                htmlFor="name"
                className=" block text-[1.25rem] font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className=" block w-full px-3 py-1.5 border border-white shadow-sm focus:outline-none focus:ring-[#00aaff] focus:border-[#00aaff] bg-transparent text-white placeholder-white sm:text-sm"
                placeholder="Name*"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className=" block text-[1.25rem] font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-3 py-1.5 border border-white shadow-sm focus:outline-none focus:ring-[#00aaff] focus:border-[#00aaff] bg-transparent text-white placeholder-white sm:text-sm"
                placeholder="Email*"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className=" block text-[1.25rem] font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="mt-1 block w-full px-3 py-1.5 border border-white shadow-sm focus:outline-none focus:ring-[#00aaff] focus:border-[#00aaff] bg-transparent text-white placeholder-white sm:text-sm"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                onClick={onSubmit}
                className="rounded-full font-medium hover:bg-[#1e6a8e] hover:text-[white] text-[#1e6a8e] py-2 px-8 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#00aaff] focus:ring-opacity-20 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Download />
    </div>
  );
};

export default ContactUs;
