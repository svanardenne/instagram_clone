import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import M from "materialize-css";

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
    formData: new FormData(),
  });

  const { title, body, formData } = values;

  const history = useHistory();

  const handleChange = (fieldName) => (e) => {
    const value = fieldName === "image" ? e.target.files[0] : e.target.value;
    formData.set(fieldName, value);
    setValues({ ...values, [fieldName]: value });
  };

  const postData = (e) => {
    e.preventDefault();
    fetch(`/post/create`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "green darken-1" });
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CreatePostCard className="card input-field">
      <form onSubmit={postData}>
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
      </form>
    </CreatePostCard>
  );
};

export default CreatePost;
