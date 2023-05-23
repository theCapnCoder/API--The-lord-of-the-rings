import React from "react";
import { Box, Typography, Toolbar, AppBar } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Link to="/">
            <Typography variant="h6">Home</Typography>
          </Link>
          <Link to="/news">
            <Typography variant="h6">News</Typography>
          </Link>
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
