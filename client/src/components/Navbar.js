import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  font-family: "Grand Hotel", cursive;
  color: black !important;
  padding-left: 15px !important;
`;

const StyledLink = styled(Link)`
  color: black !important;
`;

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <StyledLogo to="/" className="brand-logo left">
          Instagram
        </StyledLogo>
        <ul id="nav-mobile" className="right">
          <li>
            <StyledLink to="/signin">Signin</StyledLink>
          </li>
          <li>
            <StyledLink to="/signup">Signup</StyledLink>
          </li>
          <li>
            <StyledLink to="/profile">Profile</StyledLink>
          </li>
          <li>
            <StyledLink to="/post/create">Create Post</StyledLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
