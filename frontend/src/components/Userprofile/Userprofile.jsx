
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
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ImageIcon from "@mui/icons-material/Image";



const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);




const Userprofile = () => {

  const PF="http://localhost:8800/images/"
  const [user, setUser] = useState('')
  const userId = useParams().username
  const [userid, setUserid] = useState(userId)
  const [file, setFile] = useState(null);


  const submitHandler = async (e) => {
    e.preventDefault();

   // multer
   if (file) {
    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("name", fileName);
    data.append("file", file);
    user.profilePicture = fileName;
    try {
      await axios.post("/upload", data);
    } catch (err) {
      console.log(err);
    }
  }

  }

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
          <form onSubmit={submitHandler}>
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
              <div style={{marginLeft:"570px"}}>
              <label htmlFor="file" className="imageicon">
                  <BorderColorIcon/> 
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
             
               </div>            
               

               
              <div className="nameBlock">
                <h3 style={{color:"black"}}>{user.username}</h3>
                <h6 className="have">Have a nice day!!</h6>
               
              </div>
            </div>
            </form>
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