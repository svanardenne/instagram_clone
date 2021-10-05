import React from "react";
import styled from "styled-components";

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
        <h2>Instagram</h2>
        <InputField type="text" placeholder="email" />
        <InputField type="text" placeholder="password" />
        <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">
          Signin
        </button>
      </AuthCard>
    </CardWrapper>
  );
};

export default Signin;
