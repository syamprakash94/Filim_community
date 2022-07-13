import React from 'react'
import { Box } from '@mui/material'
import Post from './Post'
import Add from "./Add"


const Feed = () => {
  return (
    <Box  flex={4} p={2} >
         <Add/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
    </Box>
  )
}

export default Feed