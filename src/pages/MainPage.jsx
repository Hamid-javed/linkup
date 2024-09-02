import React from "react";
import Intro from "../components/MainPage/Intro"
import FeaturePage from "../pages/FeaturePage"
import Information from "../components/MainPage/Information"
import JoinUs from "../components/MainPage/JoinUs"
import Download from "../components/MainPage/Download"

const mainPage = () => {
  return (
    <div className="">
      <Intro />
      <FeaturePage />
      <Information />
      <JoinUs />
      <Download />
    </div>
  );
};

export default mainPage;
