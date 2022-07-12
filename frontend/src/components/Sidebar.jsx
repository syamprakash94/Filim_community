import React from "react";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  List,
} from "@mui/material";
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import EventIcon from '@mui/icons-material/Event';
import VideocamIcon from '@mui/icons-material/Videocam';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Theatre">
            <ListItemIcon>
              <MovieCreationIcon />
            </ListItemIcon>
            <ListItemText primary="Theatre releases" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#Ott">
            <ListItemIcon>
              <CameraRollIcon />
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
      </List>
    </Box>
  );
};

export default Sidebar;
