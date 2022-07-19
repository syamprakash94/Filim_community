import React from "react";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  List,
  Switch,
} from "@mui/material";
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import EventIcon from '@mui/icons-material/Event';
import VideocamIcon from '@mui/icons-material/Videocam';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import "./Sidebar.css"
const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }} className="sidebar">
        <Box position="fixed" >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Theatre">
            <ListItemIcon>
              <MovieCreationIcon  />
            </ListItemIcon>
            <ListItemText primary="Theatre releases" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#Ott">
            <ListItemIcon>
              <CameraRollIcon  />
            </ListItemIcon>
            <ListItemText primary="Ott releases" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#Event">
            <ListItemIcon>
              <EventIcon  />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#videos">
            <ListItemIcon>
              <VideocamIcon />
            </ListItemIcon>
            <ListItemText primary="videos" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#videos">
            <ListItemIcon>
              <PermPhoneMsgIcon />
            </ListItemIcon>
            <ListItemText primary="Connect" />
          </ListItemButton>
        </ListItem>

        
        <ListItem disablePadding>
          <ListItemButton component="a" href="#videos">
            <ListItemIcon>
              <Brightness2Icon />
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
   
  );
};

export default Sidebar;
