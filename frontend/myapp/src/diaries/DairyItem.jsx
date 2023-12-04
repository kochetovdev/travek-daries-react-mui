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

const DairyItem = () => {
  return (
    <Card
      sx={{
        width: "50%",
        height: "60vh",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditLocationAltIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <img
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          This impressive paella
        </Typography>
        <hr />
        <Box display="flex" paddingTop={1}>
          <Typography width="170px" fontWeight="bold" variant="caption">
            Kochetov Yevhen:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ marginLeft: "auto" }}>
        <IconButton color="warning">
          <ModeEditIcon />
        </IconButton>
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default DairyItem;
