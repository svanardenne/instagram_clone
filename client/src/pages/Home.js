import React from "react";
import styled from "styled-components";

const HomeDiv = styled.div``;

const HomeCard = styled.div`
  max-width: 500px;
  height: max-content;
  margin: 26px auto;
`;

const Home = () => {
  return (
    <HomeDiv>
      <HomeCard className="card">
        <h5>Shaun van Ardenne</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1582341305248-af5d85a9c0cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJhbnF1aWxpdHl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Placeholder"
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>Tranquility is a bridge to Anatta</h6>
          <p>This is an amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </HomeCard>
      <HomeCard className="card">
        <h5>Shaun van Ardenne</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1582341305248-af5d85a9c0cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJhbnF1aWxpdHl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Placeholder"
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>Tranquility is a bridge to Anatta</h6>
          <p>This is an amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </HomeCard>
      <HomeCard className="card">
        <h5>Shaun van Ardenne</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1582341305248-af5d85a9c0cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJhbnF1aWxpdHl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Placeholder"
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>Tranquility is a bridge to Anatta</h6>
          <p>This is an amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </HomeCard>
    </HomeDiv>
  );
};

export default Home;
