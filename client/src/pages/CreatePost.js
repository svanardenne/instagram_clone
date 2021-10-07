import React from "react";
import styled from "styled-components";

const CreatePostCard = styled.div`
  margin: 30px auto;
  max-width: 500px;
  padding: 20px;
  text-align: center;
`;

const CreatePost = () => {
  return (
    <CreatePostCard className="card input-field">
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span>Upload Image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
        Submit Post
      </button>
    </CreatePostCard>
  );
};

export default CreatePost;
