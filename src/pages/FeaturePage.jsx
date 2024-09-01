import React from "react";
import { CiHome, CiSearch } from "react-icons/ci";
import { TfiTicket } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { MdOutlineWidgets, MdOutlineArticle } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { BiCommentDetail } from "react-icons/bi";
import OurFeatures from "../components/MainPage/OurFeatures";

const FeaturePage = () => {
  const features = [
    {
      icon: <CiHome className="text-4xl font-extrabold text-white" />,
      title: "Home",
      description:
        "Your central hub for personalized contentand updates. This is your central hub for all activities on LinkUp. Enjoy a personalized content feed tailored to your interests and interactions. Whether it's updates from friends or trending posts, everything you need is right at your fingertips.",
    },
    {
      icon: <TfiTicket className="text-4xl font-extrabold text-white" />,
      title: "Post",
      description:
        "Share text, photos, and videos, and engage with others through likes, comments, and shares. Share your world with text updates, photos, and videos. Engage with your community through likes, comments, and shares, making every moment count.",
    },
    {
      icon: <FaUser className="text-4xl font-extrabold text-white" />,
      title: "User Profile",
      description:
        "Customize your profile and explore those of your friends. Customize your profile with a unique bio, profile picture, and cover photo. View and interact with friends’ profiles, staying connected with the people who matter most.",
    },
    {
      icon: <MdOutlineWidgets className="text-4xl font-extrabold text-white" />,
      title: "Feed",
      description:
        "Stay updated with real-time posts fromfriends and trending content. Experience real-time updates from your friends, followed users, and trending content. Our algorithm ensures you see the mostrelevant and engaging posts tailored to your preferences.",
    },
    {
      icon: <CiSearch className="text-4xl font-extrabold text-white" />,
      title: "Search",
      description:
        "Easily find friends, hashtags, and explore new content. Easily find friends, hashtags, and trending topics. Explore new content and users based on your interests, making descriptionovery fun and effortless.",
    },
    {
      icon: <SiInstagram className="text-4xl font-extrabold text-white" />,
      title: "Reels & Stories",
      description:
        "Share short-lived photos and videos with creative editing tools. Share your moments with short-lived photos and videos that disappear after 24 hours. Use our creative tools to edit and enhance your stories, making each one a memorable highlight.",
    },
    {
      icon: <BiCommentDetail className="text-4xl font-extrabold text-white" />,
      title: "Chat",
      description:
        "LinkUp Chat offers a user-friendly interface that makes messaging simple and enjoyable Easily share text, photos, and more in real- time, all within the app’s sleek design.",
    },
    {
      icon: <MdOutlineArticle className="text-4xl font-extrabold text-white" />,
      title: " Within Reach",
      description:
        "With LinkUp Chat, you're never far from the people who matter. Whether you're catching up with old friends or making new connections, the chat feature ensures you're always just a message away",
    },
  ];

  return (
    <div className="bg-[#1e698e] py-10">
  <div className="text-white text-2xl sm:text-3xl font-bold text-center">Our Features</div>
  <div className="p-10 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-items-center">
    {features.map((feature) => (
      <OurFeatures
        key={feature.title}
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </div>
</div>
  );
};

export default FeaturePage;
