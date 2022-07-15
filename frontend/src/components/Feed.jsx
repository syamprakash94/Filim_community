import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Add from "./Add";
import Post from './Post'
import { useState } from "react";
import axios from "axios";



const Feed = () => {

  const [posts,setPosts] = useState([])



  useEffect(()=>{
    const fetchPosts = async () => {
      const res =await axios.get("posts/timeline/62cfea2e54f10ae54a4f44ca")
      setPosts(res.data)
    }
 
    fetchPosts()
  },[])

  return (
    <Box flex={4} p={2}>
     
      <Add />
      {posts.map((p)=>(
   <Post key ={p._id} post={p} />
      ))}
     

    </Box>
  );
};

export default Feed;
