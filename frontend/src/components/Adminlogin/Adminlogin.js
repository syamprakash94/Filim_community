import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function SignIn() {

    const navigate = useNavigate()

    const Name = "admin@gmail.com";
    const pass = "1234";

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,password);

    if(name == Name && password == pass){
        localStorage.setItem("adminInfo", JSON.stringify(name))
        navigate("/adminhome")
    }else{
        setError("Email & Password does not match")
    }
    
  };
  useEffect(() => {
    const userInfo = localStorage.getItem("adminInfo");
    if (userInfo) {
      navigate("/adminhome");
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Typography component="h1" variant="h5">
            Admin Login
          </Typography>
          {error && <Typography>{error}</Typography>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
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
               
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}