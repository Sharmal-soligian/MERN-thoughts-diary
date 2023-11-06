import React, { useEffect, useState } from "react";
import "./singlepost.css";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  // const location = useLocation();
  // const path = location?.pathname.split("/")[2];
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [postId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="single post" className="singlePostImg" />
        )}
      </div>
      <h1 className="singlePostTitle">
        {post.title}
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:{" "}
          <Link to={`/?user=${post.username}`}>
            <b>{post.username}</b>
          </Link>
        </span>
        <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="singlePostDesc">{post.desc}</p>
    </div>
  );
};

export default SinglePost;
