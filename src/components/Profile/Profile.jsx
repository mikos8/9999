import React from "react";
import s from "./Prf.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.postData}/>
    </div>
  );
};

export default Profile;
