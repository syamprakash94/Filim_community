import React, { useEffect } from "react";
import { Box, Checkbox, Modal, TextField } from "@mui/material";
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
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import { blueGrey } from "@mui/material/colors";

const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);
// modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 400,
  width: 300,
  bgcolor: "background.paper",
  border: "2px  ",
  boxShadow: 24,
  p: 4,
};

export default function Post({ post }) {
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = "http://localhost:8800/images/";
  const navigate = useNavigate();

  const commentss = post.comments;
  const [comm, setComm] = useState(commentss);
  const [val, setVal] = useState("");

  useEffect(() => {
    setIsLiked(post.likes.includes(User?.user?._id));
  }, [User?.user._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("users/" + post?.userId);
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
  // comment
  const makeComment = async (text, postId) => {
    try {
      const result = await axios.patch("/posts/comment", {
        postId,
        text,
        username: User.user.username,
      });
      const results = result.data.comments;
      setComm(results);
      console.log(results, "ffff");
    } catch (err) {
      console.log(err);
    }
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
        title={<Typography fontWeight={500}>{User?.user?.username}</Typography>}
        subheader={format(post.createdAt)}
      />

      <Typography sx={{ mb: 2, ml: 3 }}>{post.desc}</Typography>

      <CardMedia
        component="img"
        height="20%"
        image={PF + post.img}
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
          <MessageIcon onClick={handleOpen} />
<div className="modalbody">
          <Modal
          sx={{overflow:'scroll'}}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (e.target[0].value.length > 0) {
                  makeComment(e.target[0].value, post._id);
                  setVal("");
                }
              }}
            >
              <Box sx={style} style={{ borderRadius: "70px" }}>
                <Typography fontWeight={700}>Comments</Typography>
                

                
                <Box sx={{ mt: 2, ml: 1 }}>
                  {comm.map((record) => {
                    return (
                      <div className="usercomment">{" "}
                        <span className="spanname" style={{ fontWeight: "400", fontSize: "15px" }}>
                          {record.username}
                        </span>{" "}
                        <span>:</span>
                        <span style={{ fontWeight: "400", fontSize: "15px" }}>
                          {" "}
                          {record.text}
                        </span>
                      </div>
                    );
                  })}
                </Box>
                <TextField
                
                  id="standard-basic"
                  label="Comments"
                  variant="standard"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                />
                <SendIcon sx={{ mt: 2 }} />
              </Box>
            </form>
          </Modal>
          </div>

        </IconButton>
       
        <span >Comments</span>
        <span className="comments">{like}People like it</span>
      </CardActions>
    </Card>
  );
}
