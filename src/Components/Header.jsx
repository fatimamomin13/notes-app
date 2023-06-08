import React from "react";
import logo from "../Assets/keep_logo.png";

const Header = () => {
  return (
    <>
      <div className="header h-20 flex border-b-2 border-y-gray-400">
        <img className="pl-16 py-2" src={logo} alt="Logo" />
        <h1 className="px-4 py-5 text-3xl text-gray-500 font-bold font-['Roboto']">
          Not Keep
        </h1>
      </div>
    </>
  );
};

export default Header;
