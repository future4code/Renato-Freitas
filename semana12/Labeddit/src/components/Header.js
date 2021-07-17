import React from "react";
import logo from "../images/LabEddit-logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white w-screen">
      <img className="w-28 h-20 m-8" src={logo} />
      <div className="m-8">
        <Link to="/">
          <button className="border text-white font-bold rounded-lg py-3 px-6 bg-orange-500 hover:bg-orange-700">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};
