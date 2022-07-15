import React from "react";
import { Box } from "@mui/material";

import Add from "./Add";

import Post from './Post'
const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Add />
      
        <Post />

    </Box>
  );
};

export default Feed;
