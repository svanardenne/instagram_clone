import React from "react";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  max-width: 550px;
  margin: 0px auto;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 15px;
  border-bottom: 1px solid grey;
  @media (max-width: 465px) {
    h4 {
      font-size: 20px;
    }
  }
`;

const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`;

const ProfileTitle = styled.div`
  margin: 0 10px;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  h6 {
    margin: 0 !important;
  }
  @media (max-width: 455px) {
    flex-direction: column;
    gap: 5px;
  }
  @media (max-width: 500px) {
    h6 {
      font-size: 14px;
    }
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Item = styled.img`
  width: 30%;
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <InfoWrapper>
        <div>
          <ProfileImage src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
        <ProfileTitle>
          <h4>Jenna Harrington</h4>
          <PostInfo>
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </PostInfo>
        </ProfileTitle>
      </InfoWrapper>
      <Gallery>
        <Item src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <Item src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <Item src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <Item src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <Item src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <Item src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </Gallery>
    </ProfileWrapper>
  );
};

export default Profile;
