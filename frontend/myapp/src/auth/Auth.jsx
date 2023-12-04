import React, { useState } from "react";
import { Box, Typography, FormLabel, TextField, Button } from "@mui/material";
import { sendAuthRequest } from "../api-helpers/helpers";

const Auth = () => {
  const [signup, setSignup] = useState(false);
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  const changeStatus = () => {
    setSignup(!signup);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (signup) {
      sendAuthRequest(true, inputs)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, inputs)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Box
      width="40%"
      borderRadius={10}
      boxShadow="5px 5px 10px #ccc"
      margin="auto"
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography padding={2} variant="h4" textAlign="center">
            {signup ? "Sign up" : "Login"}
          </Typography>
          {signup && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                required
                name="name"
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            required
            name="email"
            value={inputs.email}
            onChange={handleChange}
            margin="normal"
          />
          <FormLabel>Password</FormLabel>
          <TextField
            required
            name="password"
            value={inputs.password}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            variant="contained"
            type="submit"
          >
            {signup ? "Sing up" : "Login"}
          </Button>
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            variant="outlined"
            type="submit"
            onClick={changeStatus}
          >
            Change to {signup ? "Login" : "Sing up"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
