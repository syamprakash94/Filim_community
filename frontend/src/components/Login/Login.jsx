import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom"

const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate=useNavigate()

  useEffect(() => {
    
  const userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
   navigate("/")
  }
    
  }, [])
  


  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

     

      const { data } = await axios.post("users/login",{email,password} );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/")

     
    } catch (error) {
      setError(error.response.data.message);
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
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <Box
            component="form"
            onSubmit={submitHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              type="email"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              CONTINUE
            </Button>

            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
