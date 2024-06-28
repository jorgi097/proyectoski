import React, { useState } from 'react';
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography, Snackbar, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CreoLogo from "../../assets/AM_BODYBUILDER_TRACKER.png";
import { useTheme } from '@mui/material/styles'; // Importa useTheme desde @mui/material/styles
import { tokens } from '../../theme';

const Authentication = ({ onLogin }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const successMessages = {
    loginSuccess: "Login successful!",
  };

  const errorMessages = {
    genericError: "An error occurred. Please try again.",
    networkError: "Network error. Please check your connection and try again.",
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulación de inicio de sesión exitoso (aquí deberías hacer la lógica real de inicio de sesión)
    // Esto es solo un ejemplo
    if (username === "admin" && password === "password") {
      setOpenSnackbar(true);
      setSnackbarMessage(successMessages.loginSuccess);
      // Llamar a la función onLogin para manejar el estado de inicio de sesión en App.jsx
      onLogin({ username: username }); // Aquí puedes pasar la información del usuario que desees
    } else {
      setOpenSnackbar(true);
      setSnackbarMessage(errorMessages.genericError);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} sx={{
        backgroundImage: `url(${CreoLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <Grid item xs={12} sm={8} md={5} component={Box} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ m: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ width: '100%', mt: 2 }}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              sx={{
                backgroundColor: colors.greenAccent[500],
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                backgroundColor: colors.greenAccent[500],
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox
                value="remember"
                color="primary"
                sx={{
                  color: colors.greenAccent[500],
                  '&.Mui-checked': {
                    color: colors.greenAccent[500],
                  },
                }} />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: colors.greenAccent[500],
                '&:hover': {
                  backgroundColor: colors.primaryDark,
                },
              }}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <Link href="#" variant="body2" sx={{ color: colors.greenAccent[500], textDecoration: 'underline', mt: 2 }}>
              Forgot password?
            </Link>
          </Box>
        </Box>
      </Grid>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default Authentication;
