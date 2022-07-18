import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import Userprofile from "../components/Userprofile/Userprofile";

const Profile = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* <Navbar /> */}
        {/* <Sidebar setMode={setMode} mode={mode} /> */}
        <Userprofile />
       
      </Box>
    </ThemeProvider>
  );
};

export default Profile;
