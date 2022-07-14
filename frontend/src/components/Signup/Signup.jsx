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

const theme = createTheme();

export default function SignUp() {
  const [username, setUsername] = useState("");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpass) {
      setMessage("Passwords Do not Match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          "users/register",
          { username, email, password },
          config
        );
      
        navigate("/login");
      } catch (error) {
        setError(error.response.data.message)
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
          {message && <Typography>{message}</Typography>}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="family-name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="new-password"
                  value={confirmpass}
                  onChange={(e) => setConfirmpass(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
