import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
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

const Signin = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const postData = (e) => {
    e.preventDefault();
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "Invalid email", classes: "red darken-3" });
      return;
    }
    fetch(`/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "red darken-3" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          M.toast({ html: "Signin successful", classes: "green darken-1" });
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
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
            placeholder="email"
            value={email}
            onChange={handleChange("email")}
          />
          <InputField
            type="password"
            placeholder="password"
            value={password}
            onChange={handleChange("password")}
          />
          <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
            Signin
          </button>
        </form>
        <h5>
          Don't have an account? <Link to="/signup">Signup</Link>
        </h5>
      </AuthCard>
    </CardWrapper>
  );
};

export default Signin;
