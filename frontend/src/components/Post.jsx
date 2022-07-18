import React, { useEffect } from "react";
import { Checkbox } from "@mui/material";
import "./Post.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import Favorite from "@mui/icons-material/Favorite";
import { useState } from "react";
import axios from "axios";
import { format } from "timeago.js";

const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);


export default function Post({ post }) {

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF="http://localhost:8800/images/"
  console.log(PF+post.img,"jjj");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLiked(post.likes.includes(User?.user?._id));
  }, [User?.user._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('users/'+post?.userId);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      await axios.put("/posts/" + post._id + "/like", {
        userId: User.user._id,
      });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        className="cardHeader"
        avatar={
          <Avatar
            sx={{ bgcolor: "red" }}
            aria-label="recipe"
            onClick={() => navigate("/profile")}
          >
            <img
              className="postProfileImage"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt="noo"
            />
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={<Typography fontWeight={500}>{User?.user.username}</Typography>}
        subheader={format(post.createdAt)}
      />

      <Typography sx={{ mb: 2, ml: 3 }}>{post.desc}</Typography>
      
      <CardMedia
        component="img"
        height="20%"
        image={PF+post.img}
        alt="Paella dish"
      />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={
              post.likes.includes(User?.user?._id) ? (
                <Favorite sx={{ color: "red" }} />
              ) : (
                <FavoriteBorder />
              )
            }
            checkedIcon={
              post.likes.includes(User?.user?._id) ? (
                <FavoriteBorder />
              ) : (
                <Favorite sx={{ color: "red" }} />
              )
            }
            onClick={likeHandler}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <span>{like}People like it</span>
        <span className="comments">Comments</span>
      </CardActions>
    </Card>
  );
}
