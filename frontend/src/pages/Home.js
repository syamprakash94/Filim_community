import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";




const Home = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar f/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed  home/>
          <Rightbar  />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
