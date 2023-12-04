import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getUserDetails } from "../api-helpers/helpers";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import DairyItem from "../diaries/DairyItem";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const handleClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };

  useEffect(() => {
    getUserDetails()
      .then((data) => setUser(data.user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box display="flex" flexDirection={"column"}>
      {user && (
        <>
          {" "}
          <Typography
            textAlign={"center"}
            variant="h3"
            fontFamily={"quicksand"}
            padding={2}
          >
            User Profile
          </Typography>
          <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
            Name: {user.name}
          </Typography>
          <Typography fontFamily={"quicksand"} padding={1} textAlign="left">
            Email: {user.email}
          </Typography>
          <Button
            onClick={handleClick}
            sx={{ mr: "auto", width: "15%" }}
            color="warning"
            variant="contained"
          >
            Logout
          </Button>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
            {user.posts.map((post) => (
              <DairyItem
                key={post.id}
                title={post.title}
                date={new Date(`${post.date}`).toLocaleDateString()}
                description={post.description}
                id={post._id}
                image={post.image}
                location={post.location}
                user={user._id}
                name={user.name}
              />
            ))}
          </Box>{" "}
        </>
      )}
    </Box>
  );
};

export default Profile;