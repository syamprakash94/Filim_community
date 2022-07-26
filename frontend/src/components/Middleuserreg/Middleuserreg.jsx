import React from "react";
import "./Middleuserreg.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import axios from "axios";

const Middleuserreg = () => {
  // validation
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [err, setErr] = useState();
  const [drop, setDrop] = useState();

  const onsubmit = async (data) => {
    // console.log("kkkkkkkk");
    const middleuser = {
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password,
      email: data.email,
      phone: data.phone,     
      gender: gender,
      drop: drop,
    };

    

    if (gender && drop) {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const res = await axios.post(
          "middleuser/registermiddleuser",
          middleuser,
          config
        );

        navigate("/login");
      } catch (error) {
        setError(error.response.data.message);
      }
    } else {
      setErr("Please select Gender");
    }
  };
  return (
    <div className="middleregwrapp">
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>Login here</p>
            <input
              className="midLoginBtn"
              type="submit"
              name=""
              value="Login"
              onClick={() => navigate("/middleuserlogin")}
            />
            <br />
          </div>
          <div class="col-md-9 register-right">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 class="register-heading">Register Here</h3>
                <form onSubmit={handleSubmit(onsubmit)}>
                  <div class="row register-form">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First Name *"
                          name="firstname"
                          {...register("firstname", {
                            required: "First name is required",
                            pattern: {
                              value: /^[a-zA-Z]+$/,
                              message: "Only Contains Character",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("firstname");
                          }}
                        />
                        {errors.firstname && (
                          <small>{errors.firstname.message}</small>
                        )}
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last Name *"
                          name="lastname"
                          {...register("lastname", {
                            required: "Last name is required",
                            pattern: {
                              value: /^[a-zA-Z]+$/,
                              message: "Only Contains Character",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("lastname");
                          }}
                        />
                        {errors.lastname && (
                          <small>{errors.lastname.message}</small>
                        )}
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password *"
                          name="password"
                          {...register("password", {
                            required: "Password is required",
                            pattern: {
                              value: /^[a-zA-Z0-9_.-]*$/,
                              message: "minimum six digits required",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("password");
                          }}
                        />
                        {errors.password && (
                          <small>{errors.password.message}</small>
                        )}
                      </div>

                      <div class="form-group">
                        <div class="maxl">
                          <label class="radio inline">
                            <input
                              type="radio"
                              name="gender"
                              value="male"
                              // checked
                              onClick={() => {
                                setGender("male");
                              }}
                            />
                            <span> Male </span>
                          </label>
                          <label class="radio inline">
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              onClick={() => {
                                setGender("female");
                              }}
                            />
                            <span>Female </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Your Email *"
                          name="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("email");
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Phone *"
                          name="phone"
                          {...register("phone", {
                            required: "Phone number is required",
                            // pattern: {
                            //   value: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
                            //   message: "invalid phone number",
                            // },
                          })}
                          onKeyUp={() => {
                            trigger("phone");
                          }}
                        />
                        {errors.phone && <small>{errors.phone.message}</small>}
                      </div>
                      <div class="form-group">
                        <select
                          class="form-control"
                          onChange={(e) => {
                            setDrop(e.target.value);
                          }}
                        >
                          <option class="hidden" selected disabled>
                            Professional stream
                          </option>
                          <option value={"Hero"}>Hero</option>
                          <option value={"Heroine"}>Heroine</option>
                          <option value={"Director"}>Director</option>
                          <option value={"Producer"}>Producer</option>
                          <option value={"Musicdirector"}>
                            Music Director
                          </option>
                          <option value={"Artdirector"}>Art Director</option>
                        </select>
                      </div>
                      {err && <small>{err}</small>}

                      <Button type="submit" class="btnRegister">
                        Register
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  class="register-heading">Apply as a Hirer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
                                        </div>


                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="`Answer *" value="" />
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middleuserreg;
