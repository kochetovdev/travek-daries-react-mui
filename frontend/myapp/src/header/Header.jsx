import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Link } from "react-router-dom";

const links = ["home", "diaries", "auth"];

const Header = () => {
  const [value, setValue] = useState(0);

  return (
    <AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
      <Toolbar>
        <TravelExploreIcon sx={{ color: "black" }} />
        <Tabs
          value={value}
          onChange={(event, value) => setValue(value)}
          sx={{ ml: "auto", textDecoration: "none" }} 
        >
          {links.map((link) => (
            <Tab
              LinkComponent={Link}
              to={`/${link === "home" ? "" : link}`}
              sx={{
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "18px",
                },
              }}
              key={link}
              label={link}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
