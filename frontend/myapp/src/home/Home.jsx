import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box position="relative" width="100%" height="90vh">
      <img src="/road.jpg" alt="Road" width="100%" height="70%" />
      <Typography
        variant="h3"
        textAlign="center"
        width="100%"
        fontWeight="bold"
        fontFamily="Dancing Script, cursive"
        color="initial"
        sx={{
          position: "absolute",
          top: "0px",
          color: "#111115de",
          backgroundColor: "#B2C8DF",
        }}
      >
        Dare to live your live you have always wanted
      </Typography>
      <Box width="100%" height="30%" display="flex" flexDirection="column">
        <Typography
          fontFamily="Quicksand, sans-serif"
          textAlign="center"
          variant="h4"
          padding={4}
        >
          SHARE YOUR TRAVEL DIARIES WITH US
        </Typography>
        <Box margin="auto">
          <Button variant="outlined" sx={{ mr: 2 }}>
            Share your story
          </Button>
          <Button
            LinkComponent={Link}
            to="/diaries"
            variant="contained"
            sx={{ ml: 2 }}
          >
            View dairies
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
