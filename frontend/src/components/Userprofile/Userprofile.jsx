import { Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Feed from "../Feed";
import Navbar from "../Navbar";
import Rightbar from "../Rightbar";
import Sidebar from "../Sidebar";
import "./Userprofile.css";
import Profilerightbar from "../Profilerightbar/Profilerightbar"



const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);




const Userprofile = () => {

  const PF="http://localhost:8800/images/"
  const [user, setUser] = useState('')
  const userId = useParams().username
  const [userid, setUserid] = useState(userId)



  useEffect(() => {
   const fetchUser = async () => {
    const res = await axios.get(`/users/${userId}`)
    setUser(res.data)

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
                // src={user.coverPicture || PF+"images/noCover.png"}
                src="https://aatfweb.files.wordpress.com/2017/06/film-1155439_960_720.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src={PF+user.profilePicture}
                alt="ppp"
              />
              <div className="nameBlock">
                <h3 style={{color:"black"}}>{user.username}</h3>
                <h6 className="have">Have a nice day!!</h6>
              </div>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"></h4>
              <span className="profileInfoDesc"></span>
            </div>
          </div>
          <div className="profileRightBottom">
            
            <Feed  id={userId}/>
            <Profilerightbar user={user}  />
          </div>
        </div>
      </div>
    </>
    </>
  );
};

export default Userprofile;
