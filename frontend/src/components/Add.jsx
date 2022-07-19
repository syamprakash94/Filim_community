import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Avatar from "@mui/material/Avatar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Add.css";
import { Box } from "@mui/system";
import { Button, ButtonGroup, Stack } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { Navigate } from "react-router-dom";

const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);

const Add = (post) => {
  const [user, setUser] = useState(null);
  const PF = "http://localhost:8800/images/";
  const desc = useRef();
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: User?.user._id,
      desc: desc.current.value,
    };

    // multer
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get('users/'+post.userId);
  //     setUser(res.data);
  //   }
  //   fetchUser();
  // }, [post.userId]);

  return (
    <>
      <Card sx={{ maxWidth: 610, margin: 5 }}>
        <form onSubmit={submitHandler}>
          <Box display={"flex"}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  onClick={() => navigate("/profile")}
                >
                  <img
                    className="postProfileImage"
                    src={PF + User.user.profilePicture}
                    alt=""
                  />
                </Avatar>
              }
            />

            <TextField
              id="standard-multiline-static"
              sx={{ width: "100%" }}
              multiline
              rows={3}
              placeholder={"What's on your mind " + User?.user.username + "?"}
              variant="standard"
              inputRef={desc}
            />
          </Box>
          <Stack direction="row" gap={1} className="emoji">
            <label htmlFor="file" className="imageicon">
              <ImageIcon color="secondary" />
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <EmojiEmotionsIcon color="warning" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />

            <ButtonGroup
              variant="contained"
              aria-label="outlined  button group"
            >
              <Button type="submit">Share</Button>
            </ButtonGroup>
          </Stack>
        </form>
      </Card>
    </>
  );
};

export default Add;
