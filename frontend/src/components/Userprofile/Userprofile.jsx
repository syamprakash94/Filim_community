import { Stack } from "@mui/material";
import React from "react";
import Feed from "../Feed";
import Navbar from "../Navbar";
import Rightbar from "../Rightbar";
import Sidebar from "../Sidebar";
import "./Userprofile.css";


const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);
console.log("User",User);
const PF="http://localhost:8800/images/"


const Userprofile = () => {
  return (
    <>
         <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={PF+user.profilepic
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={PF+User.user.profilePicture}
                alt="nppp"
              />
              <div className="nameBlock">
                <h3>{User?.user.username}</h3>
                <h6 className="have">Have a nice day!!</h6>
              </div>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"></h4>
              <span className="profileInfoDesc"></span>
            </div>
          </div>
          <div className="profileRightBottom">
            
            <Feed  />
            <Rightbar  />
          </div>
        </div>
      </div>
    </>
    </>
  );
};

export default Userprofile;
