import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


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
        <Navbar/>
        <Sidebar setMode={setMode} mode={mode}/>

      </Box>
    </ThemeProvider>
  );
};

export default Profile;
