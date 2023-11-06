import React from "react";
import "./home.css";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
