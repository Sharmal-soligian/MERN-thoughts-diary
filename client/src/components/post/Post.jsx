import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg"
        alt="post"
        className="postImage"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">New Post</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        corporis, libero officia voluptas dolores vero et enim numquam ipsa
        voluptatibus sequi, quae ipsam aliquid reprehenderit itaque, quos
        adipisci accusantium tenetur!
         Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aperiam corporis, libero officia voluptas dolores vero
        et enim numquam ipsa voluptatibus sequi, quae ipsam aliquid
        reprehenderit itaque, quos adipisci accusantium tenetur! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Aperiam corporis, libero
        officia voluptas dolores vero et enim numquam ipsa voluptatibus sequi,
        quae ipsam aliquid reprehenderit itaque, quos
         adipisci accusantium
        tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aperiam corporis, libero officia voluptas dolores vero et enim numquam
        ipsa voluptatibus sequi, quae ipsam aliquid reprehenderit itaque, quos
        adipisci accusantium tenetur!
      </p>
    </div>
  );
};

export default Post;
