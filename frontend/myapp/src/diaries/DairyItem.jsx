import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const DairyItem = ({ title, description, image, location, date, user, id }) => {
  const isLoogedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };

  return (
    <Card
      sx={{
        width: "50%",
        height: "70vh",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe"></Avatar>}
        action={
          <IconButton aria-label="settings">
            <EditLocationAltIcon />
          </IconButton>
        }
        title={location}
        header={location}
        subheader={date}
      />
      <img height="194" src={image} alt={title} />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box display="flex" paddingTop={1}>
          <Typography width="170px" fontWeight="bold" variant="caption">
            Kochetov Yevhen:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
      {isLoogedInUser && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton LinkComponent={Link} to={`/post/${id}`} color="warning">
            <ModeEditIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};

export default DairyItem;
