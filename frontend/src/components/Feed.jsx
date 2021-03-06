import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Add from "./Add";
import Post from "./Post";
import { useState } from "react";
import axios from "axios";

const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);

const Feed = ({id,home}) => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = id 
    
    ? await axios.get("/posts/profile/"+id) 
    : await axios.get("posts/timeline/" + User?.user?._id);
    console.log(res.data,"res");
    setPosts(
      res.data.sort((p1, p2) => {
        return new Date(p2?.createdAt)-new Date(p1?.createdAt);
      })
    );
  };
   
  useEffect(() => {
   


    fetchPosts();
  }, [id]);
  

  return (
    <Box flex={4} p={2}>
      {User?.user._id === id && (<Add fetchPost={fetchPosts}/>)}
      {home && (<Add fetchPost={fetchPosts}/>)}
    
      {posts.map((p) => (
        <Post key={p?._id} post={p} />
      ))}
    </Box>
  );
};

export default Feed;
