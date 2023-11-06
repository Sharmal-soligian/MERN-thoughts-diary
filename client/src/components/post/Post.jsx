import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img src={post.photo} alt="post" className="postImage" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat) => (
            <span className="postCat" key={cat.id}>{cat.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
