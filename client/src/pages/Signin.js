import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <CardWrapper>
      <AuthCard className="card">
        <StyledLogo>Instagram</StyledLogo>
        <InputField type="text" placeholder="email" />
        <InputField type="text" placeholder="password" />
        <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">
          Signin
        </button>
        <h5>
          Don't have an account? <Link to="/signup">Signup</Link>
        </h5>
      </AuthCard>
    </CardWrapper>
  );
};

export default Signin;
