import {
 
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Profilerightbar.css";
import { Box } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {  useNavigate } from "react-router-dom";


const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);
// console.log(User, "akhio");


const Rightbar = (user) => {
  

  const PF = "http://localhost:8800/images/";
  const [friends, setFriends] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + User.user?._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user?._id]);

  
 

  const onSubmit = async (data) => {
    console.log("ffff");
    console.log(data, "right");
  };

  return (
    <div className="rightbarmain">
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="" width={300}>
          <Typography varient="h6" fontWeight={600} mt={2} mb={2}>
            User Informations
          </Typography>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <span className="rightbarUsername">
                Name: {User.user.username}
              </span>
            </li>
            <li className="rightbarFriend">
              <span className="rightbarUsername">Email: {User.user.email}</span>
            </li>
          </ul>

            
          <BorderColorIcon
          onClick={() => navigate("/userprofileedit")}
          />
          <hr></hr>
          <Typography varient="h6" fontWeight={600} mb={2}>
            Friends
          </Typography>

          <div className="righbarFollowings">
            {friends.map((friend) => (
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "images/noAvatar.png"
                  }
                  alt="moo"
                  className="rightbarFollowingimage"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Rightbar;
