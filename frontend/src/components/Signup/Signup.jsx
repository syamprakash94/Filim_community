import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import "../Signup/Signup";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Signup.css";
import { useRef } from "react";

const theme = createTheme();

export default function SignUp() {
  // validation
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpass = useRef();

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmits = async (e) => {
    e.preventDefault();

    if (password.current.value !== confirmpass.current.value) {
      setMessage("Passwords Do not Match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const res = await axios.post("users/register", user, config);

        navigate("/login");
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            className="signup"
            component="h1"
            variant="h5"
            fontWeight={700}
          >
            Sign up
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit) && handleSubmits}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{ color: "black" }}
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="name"
                  autoComplete="family-name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Only Contains Character",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                  inputRef={username}
                />

                {errors.name && (
                  <Typography sx={{ color: "red" }}>
                    {" "}
                    <small>{errors.name.message}</small>
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                  inputRef={email}
        
                />
                {errors.email && (
                  <Typography sx={{ color: "red" }}>
                    {" "}
                    <small>{errors.email.message}</small>
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={password}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.-]*$/,
                      message: "Minimum Six digits required",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("password");
                  }}

   
                />
                {errors.password && (
                  <Typography sx={{ color: "red" }}>
                    {" "}
                    <small>{errors.password.message}</small>
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="confirmpass"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="new-password"
                  inputRef={confirmpass}
      
                />
              </Grid>
            </Grid>
            {message && (
              <Typography sx={{ color: "red" }}>
                <small>{message}</small>
              </Typography>
            )}
            <Button
              className="buttonsign"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
