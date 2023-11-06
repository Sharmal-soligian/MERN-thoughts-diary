import React, { useEffect, useState } from "react";
import "./home.css";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import Header from "../../components/header/Header";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();


  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('http://localhost:5000/api/posts' + search);
      setPosts(res.data)
    }
    fetchPost();
  }, [search])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={ posts } />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
