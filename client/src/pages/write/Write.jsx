import React from "react";
import "./write.css";

const Write = () => {
  return (
    <div className="write">
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="write" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={ true } />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Enter your story..." type='text' className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
