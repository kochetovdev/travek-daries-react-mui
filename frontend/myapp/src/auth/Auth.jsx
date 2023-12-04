import React from "react";
import { Box, Typography, FormLabel, TextField, Button } from "@mui/material";

const Auth = () => {
  return (
    <Box
      width="40%"
      borderRadius={10}
      boxShadow="5px 5px 10px #ccc"
      margin="auto"
      marginTop={10}
    >
      <form>
        <Box
          display="flex"
          flexDirection="column"
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography padding={2} variant="h4" textAlign="center">
            Login
          </Typography>
          <FormLabel>Name</FormLabel>
          <TextField margin="normal" />
          <FormLabel>Email</FormLabel>
          <TextField margin="normal" />
          <FormLabel>Password</FormLabel>
          <TextField margin="normal" />
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            variant="outlined"
            type="submit"
          >
            Change to Sign up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
