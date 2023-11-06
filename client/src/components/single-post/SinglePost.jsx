import React from "react";
import "./singlepost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg    "
          alt="single post"
          className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        Single Post Title
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>Sharmal</b></span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et recusandae laborum porro accusantium sequi maiores corrupti odit officia, quisquam molestiae quas nulla ea cum temporibus non illum. Eius, velit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt voluptatem dolorem. Eum neque exercitationem enim, molestias nobis explicabo? Suscipit nam reiciendis aspernatur consequuntur hic eos, illum placeat ut perferendis?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod placeat sed enim! Laudantium, temporibus. Quo officia veritatis nam, ipsam dolorem architecto laboriosam incidunt explicabo tenetur unde amet delectus, vel ab!
      </p>
    </div>
  );
};

export default SinglePost;
