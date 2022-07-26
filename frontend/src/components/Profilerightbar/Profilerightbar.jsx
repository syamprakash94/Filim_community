import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  ImageList,
  ImageListItem,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Profilerightbar.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Modal } from "@mui/material";
import { useForm } from "react-hook-form";

const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);
// console.log(User, "akhio");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 550,
  width: 400,
  bgcolor: "background.paper",
  border: "2px  ",
  boxShadow: 24,
  p: 4,
};

const Rightbar = (user) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const PF = "http://localhost:8800/images/";
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + User.user?._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user?._id]);

  // edit username
  // const userId =User.user?._id
  // const username=User.user.username
  //   const editProfile = async () => {
  //     await axios
  //       .put(`/users/updateusername/${userId}`, {
  //         username,
  //         userId,
  //       })
  //       .then((resp) => {
  //         // toast("Name updated");
  //         console.log("repsodneee", resp);
  //       });
  //   };
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("ffff");
    console.log(data, "right");
  };

  return (
    <div className="rightbarmain">
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="" width={300}>
          <Typography varient="h6" fontWeight={600} mt={2} mb={2}>
            User Informations
          </Typography>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <span className="rightbarUsername">
                Name: {User.user.username}
              </span>
            </li>
            <li className="rightbarFriend">
              <span className="rightbarUsername">Email: {User.user.email}</span>
            </li>
          </ul>

          <BorderColorIcon onClick={handleOpen} />
         
            <div className="modalbody">
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <section class="appoinment section">
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                              <h4 class="mb-2 title-color">Edit Profile</h4>

                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="row">
                                  <div class="col-lg-12">
                                    <div class="form-group">
                                      <input
                                        name="name"
                                        id="name"
                                        type="text"
                                        class="form-control"
                                        placeholder={User.user.username}
                                        {...register("Name", {
                                          required: "Name is required",
                                        })}
                                        onKeyUp={() => {
                                          trigger("Name");
                                        }}
                                      />
                                    </div>
                                    {errors.Name && (
                                      <small className="text-danger">
                                        {errors.Name.message}
                                      </small>
                                    )}
                                  </div>
                                  <h4 class="mb-2 title-color">Password</h4>
                                  <div class="col-lg-12">
                                    <div class="form-group">
                                      <input
                                        name="currpassword"
                                        // id="phone"
                                        type="password"
                                        class="form-control"
                                        placeholder="Current Password"
                                        {...register("currpassword", {
                                          required: "Password is required",
                                        })}
                                        onKeyUp={() => {
                                          trigger("currpassword");
                                        }}
                                      />
                                    </div>
                                    {errors.Number && (
                                      <small className="text-danger">
                                        {errors.Number.message}
                                      </small>
                                    )}
                                  </div>

                                  <div class="col-lg-12">
                                    <div class="form-group">
                                      <input
                                        name="newpassword"
                                        // id="phone"
                                        type="password"
                                        class="form-control"
                                        placeholder="New Password"
                                        {...register("newpassword", {
                                          required: "Password is required",
                                        })}
                                        onKeyUp={() => {
                                          trigger("newpassword");
                                        }}
                                      />
                                    </div>
                                    {errors.Number && (
                                      <small className="text-danger">
                                        {errors.Number.message}
                                      </small>
                                    )}
                                  </div>
                                </div>
                                <h4 class="mb-2 title-color">Profile Image</h4>
                                <div class="form-group-2 mb-4">
                                  <CardMedia
                                    style={{ height: "100px", width: "100px" }}
                                    component="img"
                                    // height="35%"
                                    src={PF + User.user.profilePicture}
                                    alt="Paella dish"
                                  />
                                </div>

                                <button
                                  class="btn btn-main btn-primary btn-round-full"
                                  type="submit"
                                >
                                  UPDATE
                                  <i class="icofont-simple-right ml-2"></i>
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Box>
                </Fade>
              </Modal>
            </div>
          
          <hr></hr>
          <Typography varient="h6" fontWeight={600} mb={2}>
            Friends
          </Typography>

          <div className="righbarFollowings">
            {friends.map((friend) => (
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "images/noAvatar.png"
                  }
                  alt="moo"
                  className="rightbarFollowingimage"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Rightbar;
