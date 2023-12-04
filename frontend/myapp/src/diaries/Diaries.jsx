import React from "react";
import { Box } from "@mui/material";
import DiaryItem from "./DairyItem";

const Diaries = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={3}
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <DiaryItem key={item}  />
      ))}
    </Box>
  );
};

export default Diaries;
