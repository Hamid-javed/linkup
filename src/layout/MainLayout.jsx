import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/MainPage/Footer";
import Header from "../components/MainPage/Header";

const MainLayout = () => {
  return (
    <>
    <Header/>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
