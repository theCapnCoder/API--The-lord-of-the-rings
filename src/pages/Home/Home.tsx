import React from "react";
import { Bar } from "./Bar";
import { Outlet } from "react-router";

export const Home = () => {
  return (
    <div>
      <Bar />
      <Outlet />
    </div>
  );
};
