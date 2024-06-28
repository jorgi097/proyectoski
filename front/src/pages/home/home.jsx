import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[400],
        color: colors.grey[100],
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
      }}
    >
      <Typography variant="h2" fontWeight="bold" mb="30px">
        Welcome to Our Website
      </Typography>
      <Typography variant="h5" textAlign="center" mb="30px">
        Discover the amazing features of our platform. Create your account now!
      </Typography>
      <Button variant="contained" color="secondary">
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
