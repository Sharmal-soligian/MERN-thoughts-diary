import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="topListItem">
            <Link to={"/"}>About</Link>
          </li>
          <li className="topListItem">
            <Link to={"/"}>Contact</Link>
          </li>
          <li className="topListItem">
            <Link to={"/write"}>Write</Link>
          </li>
          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            src="https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
            alt="Profile"
            className="topImage"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem" style={{ color: '#3a6e06', fontWeight: '700' }}>
              <Link to={"/login"}>Login</Link>
            </li>
            <li className="topListItem" style={{ color: '#5e0404', fontWeight: '700' }}>
              <Link to={"/register"}>Register</Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
