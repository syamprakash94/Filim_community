import { Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Feed from "../Feed";
import Navbar from "../Navbar";
import Rightbar from "../Rightbar";
import Sidebar from "../Sidebar";
import "./Userprofile.css";


const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);




const Userprofile = () => {
  const PF="http://localhost:8800/images/"
  const [user, setUser] = useState('')
  const userId = useParams().username
  const [userid, setUserid] = useState(userId)
  console.log("usern",userId);


  useEffect(() => {
   const fetchUser = async () => {
    const res = await axios.get(`/users/${userId}`)
    setUser(res.data)
    console.log("syam",userId);
   }
   fetchUser()
  }, [userId])
  
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
                src="https://media.istockphoto.com/photos/thriller-movie-night-intro-picture-id1007104420?k=20&m=1007104420&s=612x612&w=0&h=AHY1l5sZ2fSaUY0XH0pBoMB-8paYHF1urmSVPm3BjCI="
                
                alt=""
              />
              <img
                className="profileUserImg"
                src={PF+User?.user.profilePicture}
                alt="ppp"
              />
              <div className="nameBlock">
                <h3 style={{color:"black"}}>{User?.user.username}</h3>
                <h6 className="have">Have a nice day!!</h6>
              </div>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"></h4>
              <span className="profileInfoDesc"></span>
            </div>
          </div>
          <div className="profileRightBottom">
            
            <Feed  id={userid}/>
            <Rightbar  />
          </div>
        </div>
      </div>
    </>
    </>
  );
};

export default Userprofile;
