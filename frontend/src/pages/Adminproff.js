import React from 'react'
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import Admindashboard from '../components/Admindashboard/Admindashboard'
import Usertable from "../components/Usertable/Usertable"
import Adminnavbar from "../components/Adminnavbar/Adminnavbar"


const Adminproff = () => {
  return (
    <div>

      hiiii
        <Adminnavbar/>
      <Stack direction="row" justifyContent="space-between" >
      <Admindashboard/>
      <Usertable/>
      </Stack>
    </div>
  )
}

export default Adminproff