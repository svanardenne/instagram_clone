import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  font-family: "Grand Hotel", cursive;
  color: black !important;
  padding-left: 15px !important;
`;

const StyledLink = styled(NavLink)`
  color: black !important;
`;

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const renderList = () => {
    if (state) {
      return [
        <li>
          <StyledLink
            to="/profile"
            activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            Profile
          </StyledLink>
        </li>,
        <li>
          <StyledLink
            to="/post/create"
            activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            Create Post
          </StyledLink>
        </li>,
      ];
    } else {
      return [
        <li>
          <StyledLink
            to="/signin"
            activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            Signin
          </StyledLink>
        </li>,
        <li>
          <StyledLink
            to="/signup"
            activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            Signup
          </StyledLink>
        </li>,
      ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper white">
        <StyledLogo to={state ? "/" : "/signin"} className="brand-logo left">
          Instagram
        </StyledLogo>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
