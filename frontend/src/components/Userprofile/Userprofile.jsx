import { Stack } from "@mui/material";
import React from "react";
import Feed from "../Feed";
import Navbar from "../Navbar";
import Rightbar from "../Rightbar";
import Sidebar from "../Sidebar";
import "./Userprofile.css";


const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);


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
                src={
                  "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                   "https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt=""
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
