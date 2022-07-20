import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Avatar,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import GroupIcon from "@mui/icons-material/Group";
import "./Adminnavbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setopen] = useState(false);
  // const PF = "http://localhost:8800/images/";
  const navigate = useNavigate();

  return (
    
    <div className="adminnavbarmain"   >
      <StyledToolbar>
        <Typography
   
        //   className="film"
          variant="h6"
          fontWeight={800}
          sx={{ display: { xs: "none", sm: "block" } }}
          onClick={() => navigate("/")}
        >
          <span className="filmname">Film</span> <span className="film1">Chatz{" "}</span>
          <span className="filmname">.</span>
        </Typography>
        <TheatersOutlinedIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          {/* <GroupIcon sx={{ width: 30, height: 30 }} className="buttonicons" /> */}
          {/* <Badge badgeContent={4} color="error">
            <MailIcon className="buttonicons" />
          </Badge> */}

          <Badge badgeContent={4} color="error">
            <NotificationsIcon className="buttonicons" />
          </Badge>
          {/* <Avatar
            sx={{ width: 30, height: 30 }}
            src={PF+User?.user?.profilePicture}
            onClick={(e) => setopen(true)}
          /> */}
        </Icons>
        {/* <UserBox onClick={(e) => setopen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={PF+User?.user?.profilePicture}
          />
          <Typography variant="span">Syam</Typography>
        </UserBox> */}
      </StyledToolbar>

      {/* Drop down */}

      {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.removeItem("userInfo");
            navigate("/login");
          }}
        >
          Logout
        </MenuItem>
      </Menu> */}
      {/* Drop down */}
    </div>
    
  );
};

export default Navbar;
