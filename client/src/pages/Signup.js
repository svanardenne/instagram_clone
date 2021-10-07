import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const StyledLogo = styled.h2`
  font-family: "Grand Hotel", cursive;
  color: black !important;
`;

const CardWrapper = styled.div`
  margin-top: 30px;
`;

const AuthCard = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 400px;
  margin: 10px auto;
`;

const InputField = styled.input`
  &:focus {
    border-bottom: 1px solid #000 !important;
    box-shadow: 0 1px 0 0 #000 !important;
  }
`;

const Signup = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;

  const postData = (e) => {
    e.preventDefault();
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "Invalid email", classes: "red darken-3" });
      return;
    }
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "green darken-1" });
          history.push("/signin");
        }
      });
  };

  const handleChange = (fieldName) => (e) => {
    setValues({ ...values, [fieldName]: e.target.value });
  };

  return (
    <CardWrapper>
      <AuthCard className="card">
        <StyledLogo>Instagram</StyledLogo>
        <form onSubmit={postData}>
          <InputField
            type="text"
            placeholder="name"
            value={name}
            onChange={handleChange("name")}
          />
          <InputField
            type="text"
            placeholder="email"
            value={email}
            onChange={handleChange("email")}
          />
          <InputField
            type="text"
            placeholder="password"
            value={password}
            onChange={handleChange("password")}
          />
          <button
            type="submit"
            className="btn waves-effect waves-light #64b5f6 blue darken-1"
          >
            Signup
          </button>
        </form>

        <h5>
          Already have an account? <Link to="/signin">Signin</Link>
        </h5>
      </AuthCard>
    </CardWrapper>
  );
};

export default Signup;
