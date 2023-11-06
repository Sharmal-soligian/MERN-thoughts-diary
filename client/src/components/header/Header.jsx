import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg" alt="" className="headerImage" />
    </div>
  );
};

export default Header;
