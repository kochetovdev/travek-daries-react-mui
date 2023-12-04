import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import DiaryItem from "./DairyItem";
import { getAllPosts } from "../api-helpers/helpers";

const Diaries = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data.posts))
      .catch(() => console.error("Failed to fetch data"));
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={3}
    >
      {posts.length &&
        posts.map((post) => (
          <DiaryItem
            title={post.title}
            description={post.description}
            image={post.image}
            location={post.location}
            date={new Date(`${post.date}`).toLocaleDateString()}
            id={post._id}
            key={post._id}
          />
        ))}
    </Box>
  );
};

export default Diaries;
