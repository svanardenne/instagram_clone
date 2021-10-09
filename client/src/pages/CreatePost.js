import React, { useState } from "react";
import styled from "styled-components";

const CreatePostCard = styled.div`
  margin: 30px auto;
  max-width: 500px;
  padding: 20px;
  text-align: center;
`;

const CreatePost = () => {
  const [values, setValues] = useState({
    title: "",
    body: "",
    image: "",
  });

  const { title, body } = values;

  const handleChange = (fieldName) => (e) => {
    const value = fieldName === "image" ? e.target.files[0] : e.target.value;
    setValues({ ...values, [fieldName]: value });
  };

  return (
    <CreatePostCard className="card input-field">
      <input
        type="text"
        placeholder="title"
        onChange={handleChange("title")}
        value={title}
      />
      <input
        type="text"
        placeholder="body"
        onChange={handleChange("body")}
        value={body}
      />
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span>Upload Image</span>
          <input type="file" onChange={handleChange("image")} />
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
