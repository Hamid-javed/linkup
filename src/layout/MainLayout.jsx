import React from "react";
import { Outlet } from "react-router-dom";
import Intro from "../components/MainPage/Intro";

const MainLayout = () => {
  return (
    <>

      <Outlet />

    </>
  );
};

export default MainLayout;
