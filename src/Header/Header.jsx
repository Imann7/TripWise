import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="text">TripWise</div>
      <div className="logo">
        <img className="logo" src="logo.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
