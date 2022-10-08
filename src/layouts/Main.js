import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Shop from "../Components/Shop/Shop";
const Main = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

export default Main;
