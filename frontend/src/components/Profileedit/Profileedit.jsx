import React from "react";
import { useForm } from "react-hook-form";
import "./Profileedit.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const user = localStorage.getItem("userInfo");
const User = JSON.parse(user);
console.log(User, "uuuu");

const Profileedit = () => {
  const PF = "http://localhost:8800/images/";
  const navigate = useNavigate();

  const onsubmit = async (data) => {
    console.log(User.user._id);
    console.log(data, "podyy");
    const user = {
      username: data.name,
      password: data.newpassword,
      userId: User.user._id,
    };

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const res = await axios.put(`users/${User.user._id}`, user, config);
      console.log("navvvv");
      navigate("/");
    } catch (err) {}
  };

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();
  return (
    <div className="maincont">
      <div class="container">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              {/* <div class="card h-100"> */}
              {/* <div class="card-body"> */}
              {/* <div class="account-settings"> */}
              {/* <div class="user-profile"> */}

              {/* <div class="user-avatar">
                      <img
                        src={
                          User.user.profilePicture
                            ? PF + User.user.profilePicture
                            : PF + "images/noAvatar.png"
                        }
                        alt="Maxwell Admin"
                      />

                    </div> */}
              {/* <label htmlFor="file" className="imageicon"> */}
              {/* <label>
                   <BorderColorIcon   />
                   <input
                     style={{ display: "none" }}
                     type="file"
                     id="file"
                     accept=".png,.jpeg,.jpg"
                    //  onChange={(e) => setFile(e.target.files[0])}
                   />
                 </label> */}
              {/* <h6 class="user-email">{User.user.email}</h6> */}
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div class="card h-100">
                <div class="card-body">
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 class="mb-2 text-primary">Personal Details</h6>
                    </div>

                    <div class="col-md-12 ">
                      <div class="form-group">
                        <label for="fullName">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder={User.user.username}
                          {...register("name", {
                            required: "User name is required",
                            // pattern: {
                            //   value: /^[a-zA-Z]+$/,
                            //   message: "Only Contains Character",
                            // },
                          })}
                          onKeyUp={() => {
                            trigger("name");
                          }}
                        />
                      </div>
                    </div>
                    {/* <div class="col-md-12 ">
                    <div class="form-group">
                      <label for="eMail">Current Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="eMail"
                        placeholder="Enter current password"
                        {...register("currpassword", {
                            required: "Password is required",
                            // pattern: {
                            //   value: /^[a-zA-Z0-9_.-]*$/,
                            //   message: "minimum six digits required",
                            // },
                          })}
                          onKeyUp={() => {
                            trigger("currpassword");
                          }}
                      />
                    </div>
                  </div> */}

                    <div class="col-md-12 ">
                      <div class="form-group">
                        <label for="website">New Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="website"
                          placeholder="Enter new password"
                          {...register("newpassword", {
                            required: "Password is required",
                            // pattern: {
                            //   value: /^[a-zA-Z0-9_.-]*$/,
                            //   message: "minimum six digits required",
                            // },
                          })}
                          onKeyUp={() => {
                            trigger("newpassword");
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="text-right">
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          class="btn btn-primary"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profileedit;
